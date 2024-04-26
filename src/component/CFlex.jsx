/**
 * <p>
 *   Description: CFlex
 * </p>
 * @author c332030
 * @since 2024/4/26
 */
export default function CFlex({children}) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                wrap: 'wrap',
                gap: '2rem',

                height: '100vh',
                padding: '5rem',
            }}
        >
            {children}
        </div>
    );
};
