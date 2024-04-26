/**
 * <p>
 *   Description: CFlex
 * </p>
 * @author c332030
 * @since 2024/4/26
 */
export default function CFlex({children, style}) {

    return (
        <div
            className={'body'}
            style={style}
        >
            {children}
        </div>
    );
};
