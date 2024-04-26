/**
 * <p>
 *   Description: CFlex
 * </p>
 * @author c332030
 * @since 2024/4/26
 */
export default function CFlex({children, style}) {

    const styleNew = Object.assign({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        wrap: 'wrap',
        gap: '2rem',

        height: '100%',
        padding: '5rem',
    }, style)

    return (
        <div
            style={styleNew}
        >
            {children}
        </div>
    );
};
