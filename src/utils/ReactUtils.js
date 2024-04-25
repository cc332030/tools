
class ReactUtils {

  /**
   *
   * @param ref
   * @returns {HTMLElement | null}
   */
  static getHtmlElement(ref) {
    if (!ref) {
      return null;
    }
    return ref.current;
  }

  /**
   *
   * @param ref {React.MutableRefObject<null>}
   * @param action {(e: HTMLElement) => void}
   */
  static doHtmlElement(ref, action) {

    const element = this.getHtmlElement(ref);
    element && action(element);
  }

}

export default ReactUtils
