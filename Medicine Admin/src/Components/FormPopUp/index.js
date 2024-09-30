import { Box, Modal } from "@mui/material";
import InputField from "../library/InputField";
import "./style.css";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 480,
    height:500,
    // overflow:"scroll",
    border: "none",
    outline: "none",
    borderRadius: "10px",
    bgcolor: "white",
    boxShadow: 24,
    p: 2,
  };

const FormPopUp = ({
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
}) => {
  return (
    <div>
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
            {/* {dropdown && dropdownOptions ? (
              <Dropdown
                style={style1}
                options={dropdownOptions}
                onChange={onChangeDropdown}
                className="alert__popup__dropdown"
              ></Dropdown>
            ) : null} */}
            {/* {rejectedReason ? (
              <TextArea
                value={reason}
                onChange={handleReasonChange}
                style={{
                  width: "25rem",
                  paddingTop: "2rem",
                }}
              ></TextArea>
            ) : null} */}
            {/* <div className="button">
              <p className="alert__submit__popup" onClick={onSubmitClick}>
                {submitText}
              </p>
              <p className="alert__cancel__popup" onClick={onCancelClick}>
                {cancelText}
              </p>
          </div> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FormPopUp;
