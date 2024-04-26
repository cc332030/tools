/**
 * <p>
 *   Description: UrlUtils
 * </p>
 * @author c332030
 * @since 2024/4/26
 */

export class UrlUtils {

}

export function getDomain(url) {
    if(!url) {
        return null;
    }

    return url.split('/').slice(0, 3).join('/')
}

export function checkUrl(url) {
    return url && url.startsWith('http');
}

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
