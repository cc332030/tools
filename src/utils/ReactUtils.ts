
class ReactUtils {

  public static getHtmlElement(ref: React.MutableRefObject<any>): HTMLElement | null {
    if (!ref) {
      return null;
    }
    return ref.current;
  }

  public static doHtmlElement(ref: React.MutableRefObject<null>, action: (e: HTMLElement) => void) {

    const element = this.getHtmlElement(ref);
    console.log('element', element)
    element && action(element);
  }

}

export default ReactUtils
