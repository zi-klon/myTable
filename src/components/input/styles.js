import {createUseStyles} from 'react-jss'

export default createUseStyles({
    inputContainer: {
        display: 'flex',
        padding: [[20, 20, 10]],
        borderBottom: '2px solid #98acb3',
        justifyContent: 'space-between',
        '& > input': {
            border: 'none',
            width: '50%',
            fontSize: 16,
        },
        '& > label': {
            fontSize: 18
        }
    }

});