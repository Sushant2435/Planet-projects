import { Box, Modal } from "@mui/material";
import "./style.css";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height:500,
    // overflow:"scroll",
    border: "none",
    outline: "none",
    borderRadius: "10px",
    bgcolor: "white",
    boxShadow: 24,
    p: 2,
  };

const PopUp=({
    handleOpen,
    open,
    handleClose,
    header,
    description,
    onSubmitClick,
    onCancelClick,
    submitText,
    cancelText,
    rejectedReason,
    reason,
    handleReasonChange,
    dropdown,
    dropdownOptions,
    placeholder,
    style1,
    onChangeField,
    onChangeDropdown,
    textField,
    maxlength,
    error,  
    children,
})=>{
    return(
        <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="form_container">
          <div className="form_popup_wrap">
            <div className="form__popup__container">
              <h3 className="form__popup__heading">{header}</h3>
              <p className="form__popup__content">{description}</p>
            </div>
            {textField ? (
              <InputField
                className="alert_popup_textfield"
                onChange={onChangeField}
                placeholder={placeholder}
                maxlength={maxlength}
                error={error}
              ></InputField>
            ) : null}
            {children}
            </div>
            </Box>
            </Modal>
    )
}

export default PopUp;