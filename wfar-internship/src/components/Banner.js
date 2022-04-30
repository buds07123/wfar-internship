import React from 'react'

// IMAGES
import cictLogo from '../img/cict-logo.png'

const Banner = () => {
    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="profile card card-body px-3 pt-3 pb-0">
                        <div class="profile-head">
                            <div class="photo-content">
                                <div class="cover-photo"></div>
                            </div>
                            <div class="profile-info">
                                <div class="profile-photo">
                                    <img src={cictLogo} class="img-fluid rounded-circle" alt="" />
                                </div>
                                <div class="profile-details">
                                    <div class="profile-name px-3 pt-2">
                                        <h4 class="h4 text-primary mb-0">WEEKLY ACCOMPLISHMENT REPORT</h4>
                                        <p>CICT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
