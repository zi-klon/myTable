import {createUseStyles} from 'react-jss'

export default createUseStyles({
    buttonContainer: {
        padding: 20,
        display: 'flex',
        '& > button': {
            backgroundColor: '#aeb4e5',
            padding: 5,
            fontSize: 16,
            fontWeight: 600,
            minWidth: 50,
            height: 40,
            border: '2px solid #98acb3',
            margin: [[0, 5]],
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#717699',
                transition: 'background-color .5s'
            }
        }
    }
});