import {createUseStyles} from 'react-jss'

export default createUseStyles({
    form: {
        width: '50%',
        '& > form': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            '& > div': {
                width: '90%'
            },
            '& > #submit': {
                backgroundColor: '#aeb4e5',
                padding: 5,
                fontSize: 16,
                fontWeight: 600,
                width: 150,
                height: 40,
                border: '2px solid #98acb3',
                margin: [[5, 0]],
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#717699',
                    transition: 'background-color .5s'
                }
            }
        }
    }
});