/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import fields from './Fields';

export const RegisterDialog = ({
  modalVisible,
  setModalVisible,
  registry,
  setRegistry
}) => {
  const {
    USER,
    PASS,
    FIELD_EMPTY,
    REGISTRY_SUCCESSFULLY,
    LOGIN_SUCCESSFULLY,
    WRONG_PASS_MAIL,
    MIN_PASS,
    NOT_EQUAL_PASS
  } = fields;

  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);
  const [emailError, setEmailError] = useState(FIELD_EMPTY);
  const [passError, setPassError] = useState(FIELD_EMPTY);
  const [repeatPassError, setRepeatPassError] = useState(FIELD_EMPTY);
  const [registryError, setRegistryError] = useState('');
  const [showDialog, setShowDialog] = useState(modalVisible);

  const checkFormData = () => {
    if (
      registry &&
      userMail != '' &&
      userPassword != '' &&
      userPassword.length >= 6
    ) {
      setModalVisible(false);
      setRegistry(false);
      setTimeout(() => alert(REGISTRY_SUCCESSFULLY), 300);
    } else if (
      !registry &&
      userMail == USER &&
      userPassword == PASS &&
      userPassword.length >= 6
    ) {
      setModalVisible(false);
      setRegistry(false);
      setTimeout(() => alert(LOGIN_SUCCESSFULLY), 300);
    } else if (!registry && (userMail != USER || userPassword != PASS)) {
      setRegistryError(WRONG_PASS_MAIL);
    }
  };

  const modalFooterContent = (
    <div className='flex-column align-items-center'>
      <div className='display-flex justify-center'>
        <Button
          label='Cancelar'
          onClick={() => setModalVisible(false)}
          className='p-button-text'
          style={{ borderRadius: '8px' }}
          size='small'
        />
        <Button
          label='Aceptar'
          onClick={() => checkFormData()}
          style={{ borderRadius: '8px' }}
          size='small'
        />
      </div>
    </div>
  );

  return (
    <>
      <Dialog
        visible={showDialog}
        header={registry ? 'Regístrate' : ' Ingresar'}
        style={{
          width: '300px',
          color: 'orange'
        }}
        onHide={() => {
          if (!showDialog) return;
          setShowDialog(false);
          setModalVisible(false);
          setRegistry(false);
        }}
        footer={modalFooterContent}
      >
        <div className='flex-column' style={{ gap: '20px' }}>
          <div className='card flex justify-content-center'>
            <div className='flex flex-column gap-2'>
              <label htmlFor='userMail'>Correo electrónico</label>
              <InputText
                id='userMail'
                aria-describedby='userMail-help'
                onChange={(event) => {
                  const value = event.target.value;
                  setUserMail(value);
                  setRegistryError('');
                  if (!value || value == '') {
                    setEmailError(FIELD_EMPTY);
                  } else {
                    setEmailError('');
                  }
                }}
                invalid={emailError}
              />
              <p className='validation-error'>{emailError}</p>
            </div>
          </div>

          <div className='card flex justify-content-center'>
            <div className='flex flex-column gap-2'>
              <label htmlFor='pass'>Contraseña</label>
              <InputText
                type='password'
                id='pass'
                aria-describedby='pass-help'
                onChange={(event) => {
                  const value = event.target.value;
                  setUserPassword(value);
                  setRegistryError('');
                  if (!value || value == '') {
                    setPassError(FIELD_EMPTY);
                  } else if (value.length < 6) {
                    setPassError(MIN_PASS);
                  } else {
                    setPassError('');
                  }
                }}
                invalid={passError}
              />
            </div>
            <p className='validation-error'>{passError}</p>
          </div>

          {registry && (
            <div className='card flex justify-content-center'>
              <div className='flex flex-column gap-2'>
                <label htmlFor='pass'>Repite contraseña</label>
                <InputText
                  type='password'
                  id='repeat-pass'
                  aria-describedby='repeat-pass-help'
                  onChange={(event) => {
                    const value = event.target.value;
                    setRepeatPassword(value);
                    setRegistryError('');
                    if (!value || value == '') {
                      setRepeatPassError(FIELD_EMPTY);
                    } else if (value != userPassword) {
                      setRepeatPassError(NOT_EQUAL_PASS);
                    } else {
                      setRepeatPassError('');
                    }
                  }}
                  invalid={repeatPassError}
                />
              </div>
              <p className='validation-error'>{repeatPassError}</p>
            </div>
          )}
          {registryError != '' && (
            <p className='validation-error'>{registryError}</p>
          )}
        </div>
      </Dialog>
    </>
  );
};
