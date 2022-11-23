/**
 * As i understood, Next does not have the access to the window
 * property if it uses SSR, so to run stuff in the browser, we need
 * to check if the window exists.
 *
 * This boolean check seems to force the code to run in the browser.
 *
 * Article explaining this in more detail
 * - https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97
 */
export function IS_BROWSER(): boolean {
    if (typeof window === 'undefined') {
        return false
    }
    return true
}