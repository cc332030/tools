/**
 * <p>
 *   Description: UrlUtils
 * </p>
 * @author c332030
 * @since 2024/4/26
 */

/**
 *
 * @param text {string}
 * @returns {string[]}
 */
export function extractUrl(text) {

    if(!text) {
        return []
    }

    const urls = []

    text.split(' ').map(e => e.trim()).forEach(str => {
        if(!str || !str.startsWith('http')) {
            return
        }

        urls.push(str)
    })

    return urls
}
