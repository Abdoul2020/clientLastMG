/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react'
import DropdownWithoutSearch from '../../widgets/feeds/DropdownWithoutSearch'
import Swal from 'sweetalert2';
import Modal from 'bootstrap/js/dist/modal';

export function Dropdown1() {



  const accounStatus = ["Aktif", "pasif", "Dondur"]

  const handleChildDatastatus = (data: any) => {
    console.log("veriiokk", data)
  }


  const modalDismissRef: any = useRef(null);


  useEffect(() => {


    console.log("modaPart::")




  }, [])
  const [swalText, setSwalText] = useState("Hesabınız başarıyla Silindi, Tekrar sizi");

  //poupup the dialog from there
  const handleAccountDelete = () => {

    //console.log("keyheery", key)


    Swal.fire({
      text: "Bu Hesabı silmek istediğinizden Emin misiniz?",
      icon: "warning",
      buttonsStyling: false,
      showDenyButton: true,
      confirmButtonText: "Evet",
      denyButtonText: 'Hayır',
      customClass: {
        confirmButton: "btn btn-primary",
        denyButton: "btn btn-light-danger"
      }
    }).then((result: any) => {

      if (result.isConfirmed) {

        Swal.fire({
          title: `
            <div id="swal2-title" class="mySwal">Div 1</div>
            <div id="swal2-title" class="mySwal">Div 2</div>
            <div id="swal2-title" class="mySwal">Div 3</div>
            <div id="swal2-title" class="mySwal">Div 4</div>
          `,
          confirmButtonText: "Tamam",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-light-primary"
          },
          showCloseButton: true,
          didOpen: () => {
            document.querySelectorAll('.mySwal').forEach( (item:any) => {
              item.style.background = 'red';
              item.addEventListener('click', (event:any) => {
                item.style.background = 'blue';
                setSwalText(event.target.innerText); // set the new text after the alert is closed
                



              });
            });
          }
        });
        
        

      }
    });
  }

  //let use this
  const [freeSeans, setFreeSeans] = useState(true)




  return (
    <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>


      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'> Hesap hızlı Ayarı</div>

      </div>

      <div className='separator border-gray-200'></div>

      <div className='px-7 py-5'>
        <div className='mb-10'>
          <label className='form-label fw-bold'> Hesap Durumum</label>

          <div>
            {/* <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
            >
              <option></option>
              <option value='1'>Aktif</option>
              <option value='2'>Passif</option>
              <option value='3'> Dondur </option>
             
            </select> */}

            <DropdownWithoutSearch options={accounStatus} updateData={handleChildDatastatus} />
          </div>
        </div>

      

        <div className='mb-10'>
          <label className='form-label fw-bold'> Hesabımı Sil </label>

          <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
            {/* <input
              className='form-check-input'
              type='checkbox'
              value=''
              name='notifications'
              defaultChecked={true}
            /> */}

            <button
              type='reset'
              className='btn btn-sm btn-danger btn-danger-active me-2 w-full'
              data-kt-menu-dismiss='true'
              onClick={() => handleAccountDelete()}
            >
              Sil
            </button>
            {/* <label className='form-check-label'>Enabled</label> */}
          </div>


        </div>

        <div className='d-flex justify-content-end'>

          {/* <button
            type='reset'
            className='btn btn-sm btn-light btn-active-light-primary me-2'
            data-kt-menu-dismiss='true'
          >
            Reset
          </button>

          <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
            Apply
          </button> */}
        </div>
      </div>


      <button

        ref={modalDismissRef}
        type="button"
        style={{ display: 'none' }}
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_new_address" >

        Open Modal

      </button>



      {/* popup toset the message */}
      <div className="modal fade" id="kt_modal_new_address" tabIndex={-1} aria-hidden="true">



        <div className="modal-dialog modal-dialog-centered mw-650px">
          <div className="modal-content">

            <form className="form" action="#" id="kt_modal_new_address_form">

              <div className="modal-header" id="kt_modal_new_address_header">

                <h2>Add New Address</h2>

                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>

              </div>







              <div className="modal-body py-10 px-lg-17">

                <div className="scroll-y me-n7 pe-7" id="kt_modal_new_address_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_new_address_header" data-kt-scroll-wrappers="#kt_modal_new_address_scroll" data-kt-scroll-offset="300px">

                  <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                    <i className="ki-duotone ki-information fs-2tx text-warning me-4">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                    </i>

                    <div className="d-flex flex-stack flex-grow-1">
                      <div className="fw-semibold">
                        <h4 className="text-gray-900 fw-bold">Warning</h4>
                        <div className="fs-6 text-gray-700">Updating address may affter to your
                          <a href="#">Tax Location</a></div>
                      </div>

                    </div>

                  </div>


                  <div className="row mb-5">

                    <div className="col-md-6 fv-row">

                      <label className="required fs-5 fw-semibold mb-2">First name</label>

                      <input type="text" className="form-control form-control-solid" placeholder="" name="first-name" />
                    </div>

                    <div className="col-md-6 fv-row">
                      <label className="required fs-5 fw-semibold mb-2">Last name</label>

                      <input type="text" className="form-control form-control-solid" placeholder="" name="last-name" />
                    </div>
                  </div>
                  <div className="d-flex flex-column mb-5 fv-row">
                    <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                      <span className="required">Country</span>
                      <span className="ms-1" data-bs-toggle="tooltip" title="Your payment statements may very based on selected country">
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                        </i>
                      </span>
                    </label>


                  </div>
                  <div className="d-flex flex-column mb-5 fv-row">
                    <label className="required fs-5 fw-semibold mb-2">Address Line 1</label>
                    <input className="form-control form-control-solid" placeholder="" name="address1" />
                  </div>
                  <div className="d-flex flex-column mb-5 fv-row">
                    <label className="required fs-5 fw-semibold mb-2">Address Line 2</label>
                    <input className="form-control form-control-solid" placeholder="" name="address2" />
                  </div>
                  <div className="d-flex flex-column mb-5 fv-row">
                    <label className="fs-5 fw-semibold mb-2">Town</label>
                    <input className="form-control form-control-solid" placeholder="" name="city" />
                  </div>
                  <div className="row g-9 mb-5">
                    <div className="col-md-6 fv-row">
                      <label className="fs-5 fw-semibold mb-2">State / Province</label>
                      <input className="form-control form-control-solid" placeholder="" name="state" />
                    </div>
                    <div className="col-md-6 fv-row">
                      <label className="fs-5 fw-semibold mb-2">Post Code</label>
                      <input className="form-control form-control-solid" placeholder="" name="postcode" />
                    </div>
                  </div>
                  <div className="fv-row mb-5">
                    <div className="d-flex flex-stack">
                      <div className="me-5">
                        <label className="fs-5 fw-semibold">Use as a billing adderess?</label>
                        <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                      </div>
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        <input className="form-check-input" name="billing" type="checkbox" value="1" checked={true} />
                        <span className="form-check-label fw-semibold text-muted">Yes</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer flex-center">
                <button type="reset" id="kt_modal_new_address_cancel" className="btn btn-light me-3">Discard</button>
                <button type="submit" id="kt_modal_new_address_submit" className="btn btn-primary">
                  <span className="indicator-label">Submit</span>
                  <span className="indicator-progress">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                </button>
              </div>
            </form>
          </div>
        </div>


      </div>

    </div>
  )
}
