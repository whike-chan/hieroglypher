import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'

const cases: { input: string; result: string; hebon: string }[] = JSON.parse(
  readFileSync(new URL('./conversion-cases.json', import.meta.url), 'utf8'),
)

test('更新前と同じ変換結果・詳細を表示する', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/')
  await expect(page.locator('input')).toBeFocused()
  await expect(page.locator('#js_result')).toHaveText(cases[0].result)
  await page.getByRole('button', { name: '変換の詳細を見る' }).click()
  for (const { input, result, hebon } of cases) {
    await page.locator('input').fill(input)
    await expect(page.locator('#js_result')).toHaveText(result)
    await expect(page.locator('dd').nth(0)).toHaveText(input)
    await expect(page.locator('dd').nth(1)).toHaveText(hebon)
  }
  await page.getByRole('button', { name: '変換の詳細を見る' }).click()
  await expect(page.locator('dd').nth(1)).toBeHidden()
  expect(errors).toEqual([])
})

test('変換結果をコピー・クリアできる', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/')
  await expect(page.locator('input')).toBeFocused()
  await page.locator('input').fill(cases[2].input)
  await expect(page.locator('#js_result')).toHaveText(cases[2].result)
  await page.getByRole('button', { name: 'コピー' }).click()
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(cases[2].result)
  await page.getByRole('button', { name: 'クリア' }).click()
  await expect(page.locator('input')).toHaveValue('')
  await expect(page.locator('#js_result')).toBeEmpty()
})

test('全ページへ移動・直接アクセスでき、対応表は26文字ある', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/')
  await expect(page.locator('input')).toBeFocused()
  for (const [path, name] of [['/table', '対応表'], ['/notes', '注意事項'], ['/story', 'あらすじ'], ['/', 'ヒエログリファー']]) {
    await page.locator('footer').getByRole('link', { name, exact: true }).click()
    await expect(page).toHaveURL(new RegExp(path === '/' ? '/$' : `${path}/?$`))
    await expect(page.locator('h1')).toBeVisible()
    const response = await page.reload()
    expect(response?.status()).toBe(200)
    await expect(page.locator('h1')).toBeVisible()
    if (path === '/table') await expect(page.locator('tbody tr')).toHaveCount(26)
  }
  expect(errors).toEqual([])
})

test('スマートフォン幅で入力・変換できる', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await expect(page.locator('input')).toBeFocused()
  await page.locator('input').fill(cases[4].input)
  await expect(page.locator('#js_result')).toHaveText(cases[4].result)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
