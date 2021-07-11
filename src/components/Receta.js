import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';




function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

export const Receta = ({ receta }) => {

    // Configuración del modal de material-ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const { setIdReceta } = useContext( ModalContext );
    
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{ receta.strDrink }</h2>

                <img className="card-img-top" src={ receta.strDrinkThumb } alt={`Imagen de ${ receta.strDrink }`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={ () => {
                            setIdReceta( receta.idDrink )
                            handleOpen()
                        } }
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={ open }
                        onClose={ () => {
                            setIdReceta(null);
                            handleClose();
                        } }
                    >
                        <div style={ modalStyle } className={ classes.paper }>
                            <h1>Desde Modal</h1>
                        </div>
                    </Modal>
                    
                </div>
                
            </div>
        </div>
    )
}
