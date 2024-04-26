/**
 * <p>
 *   Description: FileUtils
 * </p>
 * @author c332030
 * @since 2024/4/26
 */

export class FileUtils {

}

export function str2txt(str, name) {

    if(!str) {
        throw new Error('Empty string');
    }

    const blob = new Blob([str]);

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name ? name : `${new Date().getTime()}.txt`;

    document.body.append(a);

    const aEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
    });
    a.dispatchEvent(aEvent);

    a.remove();

}
