import {createUseStyles} from 'react-jss'

export default createUseStyles({
    table: {
        borderTop: 'none',
        width: '90%',
        '& > table': {
            borderCollapse: 'collapse',
            width: '100%',
            '& > thead': {
                '& > tr': {
                    borderBottom: '2px solid #98acb3',
                    '& > th': {
                        padding: 10,
                        borderRight: '2px solid #98acb3'
                    },
                    '& :last-child': {
                        borderRight: 'none'
                    }
                }
            },
            '& > tbody': {
                '& > tr': {
                    borderBottom: '2px solid #98acb3',
                    '& > td': {
                        padding: 10,
                        borderRight: '2px solid #98acb3',
                        boxSizing: 'border-box',
                        '& > button': {
                            backgroundColor: '#db7d7d',
                            border: 'none',
                            width: '100%',
                            height: 25,
                        },
                        '& :hover': {
                            color: 'red'
                        }
                    },
                },
                '& :last-child': {
                    borderRight: 'none'
                },
                '& :hover': {
                    cursor: 'pointer',
                    backgroundColor: '#d8ebed',
                    transition: 'background-color .7s'
                }
            }
        }
    },
    placeholder: {
        padding: 30,
        height: 80,
        fontSize: 20,
        textAlign: 'center'
    }
});