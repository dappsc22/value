"use strict";const openCommonModal=({title,size='sm',content,confirmText,onConfirm,cancelText,onCancel,isSameButtonSize=true,canClose=true,canCloseWhenConfirm=true})=>{if($('#gate-modal-container').length<=0){$('body').append(`<div id='gate-modal-container'></div>`)}const timeStamp=new Date().getTime();const gateModalHtml=`
    <div class='gate-modal-mask' id='gate-modal-${timeStamp}'>
      <div class='gate-modal-wrapper gate-modal-wrapper-${size}'>
        ${title?`<div class='gate-modal-title'>${title}</div>`:``}
        ${canClose?`<div class='gate-modal-close'><svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3.33594 3.33301L8.0026 7.99967M8.0026 7.99967L12.6693 3.33301M8.0026 7.99967L3.33594 12.6663M8.0026 7.99967L12.6693 12.6663' stroke='#B8BDCC' stroke-width='2' stroke-linecap='square'/></svg></div>`:''}
        <div class='gate-modal-content-container'>
          <div class='gate-modal-content'>${content}</div>
          ${cancelText||confirmText?`<div class='gate-modal-button-container ${!isSameButtonSize?'asymmetric-button':''}'>
            ${cancelText?`<div class='gate-modal-button gate-modal-cancel-button'>${cancelText}</div>`:``}
            ${confirmText?`<div class='gate-modal-button gate-modal-confirm-button'>${confirmText}</div>`:``}
          </div>`:''}
        </div>
      </div>
    </div>
  `;const gateModal=$(gateModalHtml).appendTo('#gate-modal-container');gateModal.on('click','.gate-modal-cancel-button',function(){onCancel&&$.isFunction(onCancel)&&onCancel();canClose&&$(gateModal).remove()});gateModal.on('click','.gate-modal-confirm-button',function(){onConfirm&&$.isFunction(onConfirm)&&onConfirm();canClose&&canCloseWhenConfirm&&$(gateModal).remove()});gateModal.on('click','.gate-modal-close',function(){canClose&&$(gateModal).remove()})}