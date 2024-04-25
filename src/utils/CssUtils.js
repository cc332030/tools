
class CssUtils {

  static classList(...classes) {
    return classes.join(' ');
  }

}

export default CssUtils

export const classList = CssUtils.classList
