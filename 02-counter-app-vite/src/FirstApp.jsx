import PropTypes from 'prop-types';

//--------- Variables
const newMessage = {
    name: 'Belen',
    note: 'Es mi primera app en React'
};

//--------- Functions: Ponerlas afuera para evitar que el FC la renderice de nuevo y utilice mas espacio de memoria
const greeting = ({name, note}) => {
    return `Hola ${name}, tu nota es: ${note}!`
}

// Functional Component
// props : Un objeto, permite establecer una comunicacion entre el componente padre hacia el componente hijo
export const FirstApp = ( {title, subtitle} ) => {
    // console.log(props);

    return (
        // Fragmento
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{ greeting(newMessage) }</p>
        </>
    )
}


// Configuraciones al componente
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
}