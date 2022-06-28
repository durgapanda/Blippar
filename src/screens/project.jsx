// import "./projectlatest.css";
//import "./font.css";
import "./oldstyle.css"
import logo from '../assets/images/logo.svg';
import ddArrowDown from '../assets/images/icon-caret-down.svg';
import menu from '../assets/images/icon-hamburger-menu.svg';
import folder from '../assets/images/icon-folder.svg';
import f1Image from '../assets/images/img-1.png';
import scanImage from '../assets/images/scan.png';
import trendImage from '../assets/images/icon-trend.svg'
import image1 from '../assets/images/img-2.png'
import image2 from '../assets/images/img-3.png'
import image3 from '../assets/images/img-3.png'
import image4 from '../assets/images/icon-top.svg'
import dot1 from '../assets/images/icon-context-menu.svg'
import crossIcon from '../assets/images/icon-close.svg'
import barcode from '../assets/images/scan-code-lg.png'
import barcadeSideImage from '../assets/images/marker-lg.png'
import imagePopup from '../assets/images/preview-1.png'
import imagePopup2 from '../assets/images/preview-2.png'
import imagePopup3 from '../assets/images/preview-3.png'
import deleteIcon from '../assets/images/icon-delete.svg'
import imageDownload from '../assets/images//icon-download.svg'
import imageFold from '../assets/images/new-folder-organise.png'
import imageActive1 from '../assets/images/img-t1.png'
import imageActive2 from '../assets/images/img-t2.png'
import imageActive3 from '../assets/images/img-t3.png'
import imageFolder1 from '../assets/images/new-folder-organise.png'
import menuHumber from '../assets/images/icon-tabs.svg'
import sliderfirst from '../assets/images/placeholder1.png'
import slidersecond from '../assets/images/placeholder2.png'
import dolarimage from '../assets/images/icon-copy-link.svg'
import arrorMark from '../assets/images/icon-arrow-right.svg'
import sliderThird from '../assets/images/placeholder3.png'
import imagemodal5 from '../assets/images/upload-marker.png'
import previewImage from '../assets/images/preview-lg.png'
import placeholderNewOne from '../assets/images/placeholder1.png'
import secondFolderImage1 from '../assets/images/folder-tn2.png'
import secondFolderImage2 from '../assets/images/folder-tn1.png'
import secondFolderImage3 from '../assets/images/folder-tn3.png'
import crossImageModal from '../assets/images/close.png'
import hiddenFolder from '../assets/images/icon-folder-disabled.png'


import { useState } from "react";



const Projects = () => {

    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModalImage, setshowModalImage] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
    const [confirmProjetOrganise, setConfirmProjetOrganise] = useState(false);
    const [showAddProject, setShowAddProject] = useState(false);
    const [activeTiles, setActiveTiles] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalShowSecond, setmodalShowSecond] = useState(false);
    const [showModalImageAdd, setshowModalImageAdd] = useState(false);
    const [showModalImageAddNew, setshowModalImageAddNew] = useState(false);
    const [showModalNew, setshowModalNew] = useState(false);
    const [showModalNew1, setshowModalNew1] = useState(false);
    const [showModalImageAddSeven, setshowModalImageAddSeven] = useState(false)
    const [modalThird, setModalThird] = useState(false);
    const [cancelButton, setCancelButton] = useState(true)
    const [cancelButtonOrganize, setCancelButtonOrganize] = useState(false)
    const [showView, setShowView] = useState(false)
    const [modalShowNeww, setModalShowNeww] = useState(false)
    const [activeTilesGrid, setActiveTileGrid] = useState(false)
    const [slideName, setSlideName] = useState('slide-np1')
    const [message, setMessage] = useState(false)
    const [messageDisplay, setMessageDisplay] = useState(true)
    const [showAllProjects, setShowAllProjects] = useState(true)


    const [showFolderDetails, setShowFolderDetails] = useState(false)

    // const handleCancelEdit = () =
    //     setCancelEdit(false);
    //     // setEdit(!edit);
    // };
    const showNext = (name) => {

        setSlideName(name)

    }
    const handleClick = (event) => {
        setSlideName("slide-np1")
    };

    // const messageDisplay = (event) => {
    //     setMessageDisplayo(false)
    // }

    return (

        <div className="text-center">
            <div className="container-fluid">
                {/* <!-- header starts --> */}
                <header className="header row">
                    <div className="logo-section col-sm-12 col-md-4 my-4">
                        <p>
                            <a href="#" className="logo">
                                <img src={logo} alt="Blipper Logo" width="90px" height="24px" />
                            </a>
                        </p>
                        <p className="text-white logo-desc">
                            BlippBuilder
                        </p>
                        <p className="text-welcome">
                            Welcome back Steve
                        </p>
                    </div>
                    <div className="profile-section col-sm-12 col-md-8 text-right my-5">
                        <button type="button" className="btn btn-white-o learn text-bold dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Learn
                            <img src={ddArrowDown} alt="Dropdown Arrow down" width="" />
                        </button>

                        <div className="dropdown-menu dropdown-menu-lg-right mt-n1" aria-labelledby="learnDropdownMenuLink">
                            <a className="dropdown-item" href="#">Getting Started</a>
                            <a className="dropdown-item" href="#">Documentation</a>
                            <a className="dropdown-item" href="#">Request Support</a>
                        </div>
                        <div className="dropdown d-inline ml-2">
                            <a className="btn dropdown-toggle text-white avatar" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="true">
                                <span className="initials d-inline-block">SS</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-secondary d-lg-block bg-dark btn-new-proj px-5 text-uppercase" data-toggle="modal" data-target="#newProjectModal" onClick="showNext('slide-np1')">Create A New
                        Project</button>
                </header>

                {/* <!-- header ends -->
    
          
          {/* display message on tab & mobile starts */}
                <div className="container-fluid">
                    <div className={messageDisplay ? "row bg-secondary d-flex d-lg-none d-sm-flex justify-content-between p-3 d-message" : "d-none"}>
                        <p className="mb-0 col-11 text-left">To create or edit projects, please view on desktop.</p>
                        <div className="col-1 text-right" onClick={() => setMessageDisplay(false)}><img src={crossImageModal} alt="" /></div>
                    </div>
                </div>
                {/* display message on tab & mobile ends */}

                {/* section-options starts */}
                <div className="container-fluid">
                    <section className="justify-content-between row section-options mb-3">
                        <div className="subnav title col-8 text-left">
                            <span className="subtitle">Your projects</span>
                            <div className="dropdown open d-inline">
                                <button className="btn btn-secondary-o dropdown-toggle text-uppercase dropdown-sort ml-4 pl-4 py-2" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="text-sort">Sort By</span>
                                    <img src={ddArrowDown} alt="Dropdown Arrow down" width="" />
                                </button>
                                <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                    <button className="dropdown-item" href="#">Date Created</button>
                                    <button className="dropdown-item" href="#">Last modified</button>
                                    <button className="dropdown-item" href="#">Name A-Z</button>
                                    <button className="dropdown-item" href="#">Name Z-A</button>
                                </div>
                            </div>
                        </div>


                        <div className="subnav icons col text-right newfolder"  >
                            {
                                activeTiles ? <img src={menuHumber} alt="Icon Menu" width="32px" height="27px"
                                    className={activeTiles ? "cupNew subnav-icon icon-grid " : "cup subnav-icon icon-grid"} onClick={() => setActiveTiles(!activeTiles)} /> :

                                    <img style={{ marginRight: "4px", cursor: "pointer" }} src={menu} alt="Icon Menu" width="32px" height="24px"
                                        className="cupNew subnav-icon icon-tiles" onClick={() => setActiveTiles(!activeTiles)}

                                    />}

                            {showFolderDetails ?
                                <img src={hiddenFolder} data-toggle="modal" class="d-inline-block ml-3 cna icon-folder-disabled" alt="Icon Folder" width="32px" height="28px"
                                /> :
                                <img src={folder} data-toggle="modal" onClick={() => setShowAddProject(true)}
                                    className="d-inline-block ml-3 cup newfolder-st " alt="Icon Folder"
                                />}





                        </div>
                    </section>
                </div>
                {/* section options end */}
                {/* <!-- breadcrumbs starts --> */}
                <div className={showAllProjects ? "container-fluid breadcrumbs d-none" : "container-fluid breadcrumbs "}>
                    <div className="row">
                        <p>
                            <a href="#" className="text-warning" onClick={() => { setShowAllProjects(!showAllProjects); setShowFolderDetails(false) }}>All Projects</a> <span className="divider"> | </span>
                            <a href="#" className="text-secondary">Folder Name</a>
                        </p>
                    </div>
                </div>
                {/* <!-- breadcrumbs ends--> */}
                {/* <!-- section grid starts -->  */}
                <div className={activeTiles ? "container-fluid section-grid d-none" : "container-fluid section-grid active"}>
                    <div className={showFolderDetails ? "row section-projects d-none" : "row section-projects "}>


                    <div className="col">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2" onMouseEnter={() => setShow(!show)} onMouseLeave={() => setShow(false)}>
                                    <img src={f1Image} className="card-img-top project-image" alt="..." />
                                    <div className={show ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button onClick={() => setShow(false)} className="btn btn-white">Open Project</button>
                                        <button onClick={() => setShow(false)} className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectWOModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code">
                                        <img src={scanImage} alt="" className="img-responsive" />
                                        <p>Scan To See</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Using the Gyro</h3>
                                        <div className="grid-icons">
                                            <img src={trendImage} alt="" />
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Open project</button>
                                                <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                    project</button>
                                                <button className="dropdown-item" href="#">Duplicate project</button>
                                                <button className="dropdown-item" href="#">Delete project</button>
                                                <button className="dropdown-item" href="#">Version history</button>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <div className="title d-flex justify-content-between">
                                        <p className="status"> <span className="status-legend published mr-2"></span><span
                                            className="status-text">Published</span></p>
                                        <div className="views align-self-center p-1 pr-3">
                                            Views: <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col" style={{ marginBottom: "0px" }}>
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2 position-relative" onMouseEnter={() => setShow(!show)} onMouseLeave={() => setShow(false)}>
                                    <img src={f1Image} className="card-img-top project-image" alt="..." />

                                    <div className={show ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button onClick={() => setShow(false)} className="btn btn-white">Open Project</button>
                                        <button onClick={() => setShow(false)} className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectWOModal">View
                                            Project</button>
                                    </div>

                                    <div className="scan-code">
                                        <img src={scanImage} alt="" className="img-responsive" />
                                        <p>Scan To See</p>
                                    </div>

                                </div>
                                <div className="view-ar visible btn-call-to-action mt-1">
                                    <button className="btn btn-secondaryNew">View in AR</button>
                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Using the Gyro</h3>
                                        <div className="grid-icons">
                                            <img src={trendImage} alt="" />
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Open project</button>
                                                <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                    project</button>
                                                <button className="dropdown-item" href="#">Duplicate project</button>
                                                <button className="dropdown-item" href="#">Delete project</button>
                                                <button className="dropdown-item" href="#">Version history</button>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <div className="title d-flex justify-content-between">
                                        <p className="status"> <span className="status-legend published mr-2"></span><span
                                            className="status-text">Published</span></p>
                                        <div className="views align-self-center p-1 pr-3">
                                            Views: <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}



                        <div className="col">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2" onMouseEnter={() => setShowModal(!showModal)} onMouseLeave={() => setShowModal(false)}>
                                    <img src={image1} className="card-img-top project-image" alt="..." />
                                    <div className={showModal ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code">
                                        <img src={scanImage} alt="" className="img-responsive" />
                                        <p>Scan To See</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Demo 1</h3>
                                        <div className="grid-icons">
                                            <img src={trendImage} alt="" />
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Open project</button>
                                                <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                    project</button>
                                                <button className="dropdown-item" href="#">Duplicate project</button>
                                                <button className="dropdown-item" href="#">Delete project</button>
                                                <button className="dropdown-item" href="#">Version history</button>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <div className="title d-flex justify-content-between">
                                        <p className="status"> <span className="status-legend published mr-2"></span><span
                                            className="status-text">Published</span></p>
                                        <div className="views align-self-center p-1 pr-3">
                                            Views: <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2" onMouseEnter={() => { setshowModalImage(!showModalImage) }} onMouseLeave={() => setshowModalImage(false)}>
                                    <img src={image1} className="card-img-top project-image" alt="..." />
                                    <div className={showModalImage ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code">
                                        <img src={scanImage} alt="" className="img-responsive" />
                                        <p>Scan To See</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Demo 1</h3>
                                        <div>
                                            <img src={trendImage} alt="" />
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Open project</button>
                                                <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                    project</button>
                                                <button className="dropdown-item" href="#">Duplicate project</button>
                                                <button className="dropdown-item" href="#">Delete project</button>
                                                <button className="dropdown-item" href="#">Version history</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <div className="title d-flex justify-content-between">
                                        <p className="status"> <span className="status-legend published mr-2"></span><span
                                            className="status-text">Published</span></p>
                                        <div className="views align-self-center p-1 pr-3">
                                            Views: <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* me */}
                        <div className="col " style={{ marginBottom: "0px" }}>
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2" onMouseEnter={() => { setshowModalImageAddNew(!showModalImageAddNew) }} onMouseLeave={() => setshowModalImageAddNew(false)}>
                                    <img src={image2} className="card-img-top project-image" alt="..." />
                                    <div className={showModalImageAddNew ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code">
                                        <img src={scanImage} alt="" className="img-responsive" />
                                        <p>Scan To See</p>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Project Starter 3</h3>
                                        <div className="grid-icons">
                                            <img src={trendImage} alt="" />
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Open project</button>
                                                <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                    project</button>
                                                <button className="dropdown-item" href="#">Duplicate project</button>
                                                <button className="dropdown-item" href="#">Delete project</button>
                                                <button className="dropdown-item" href="#">Version history</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <div className="title d-flex justify-content-between">
                                        <p className="status"> <span className="status-legend not-published mr-2"></span><span className="status-text">Not
                                            Published</span></p>
                                        <div className="views align-self-center p-1 pr-3">
                                            Views: <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2" onMouseEnter={() => { setshowModalNew(!showModalNew) }} onMouseLeave={() => setshowModalNew(false)}>
                                    <img src={image2} className="card-img-top project-image" alt="..." />
                                    <div className={showModalNew ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code">
                                        <img src={scanImage} alt="" className="img-responsive" />
                                        <p>Scan To See</p>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Project Starter 3</h3>
                                        <div>
                                            <img src={trendImage} alt="" />
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Open project</button>
                                                <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                    project</button>
                                                <button className="dropdown-item" href="#">Duplicate project</button>
                                                <button className="dropdown-item" href="#">Delete project</button>
                                                <button className="dropdown-item" href="#">Version history</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <div className="title d-flex justify-content-between">
                                        <p className="status"> <span className="status-legend not-published mr-2"></span><span className="status-text">Not
                                            Published</span></p>
                                        <div className="views align-self-center p-1 pr-3">
                                            Views: <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2" onMouseEnter={() => { setshowModalNew1(!showModalNew1) }} onMouseLeave={() => setshowModalNew1(false)}>
                                    <img src={image2} className="card-img-top project-image" alt="..." />
                                    <div className={showModalNew1 ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code">
                                        <img src={scanImage} alt="" className="img-responsive" />
                                        <p>Scan To See</p>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Project Starter 3</h3>
                                        <div>
                                            <img src={trendImage} alt="" />
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Open project</button>
                                                <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                    project</button>
                                                <button className="dropdown-item" href="#">Duplicate project</button>
                                                <button className="dropdown-item" href="#">Delete project</button>
                                                <button className="dropdown-item" href="#">Version history</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <div className="title d-flex justify-content-between">
                                        <p className="status"> <span className="status-legend not-published mr-2"></span><span className="status-text">Not
                                            Published</span></p>
                                        <div className="views align-self-center p-1 pr-3">
                                            Views: <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2" onMouseEnter={() => { setshowModalImageAddSeven(!showModalImageAddSeven) }} onMouseLeave={() => setshowModalImageAddSeven(false)}>
                                    <img src={image2} className="card-img-top project-image" alt="..." />
                                    <div className={showModalImageAddSeven ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code">
                                        <img src={scanImage} alt="" className="img-responsive" />
                                        <p>Scan To See</p>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Project Starter 3</h3>
                                        <div>
                                            <img src={trendImage} alt="" />
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Open project</button>
                                                <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                    project</button>
                                                <button className="dropdown-item" href="#">Duplicate project</button>
                                                <button className="dropdown-item" href="#">Delete project</button>
                                                <button className="dropdown-item" href="#">Version history</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <div className="title d-flex justify-content-between">
                                        <p className="status"> <span className="status-legend not-published mr-2"></span><span className="status-text">Not
                                            Published</span></p>
                                        <div className="views align-self-center p-1 pr-3">
                                            Views: <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2" onMouseEnter={() => { setshowModalImageAdd(!showModalImageAdd) }} onMouseLeave={() => setshowModalImageAdd(false)}>
                                    <img src={image2} className="card-img-top project-image" alt="..." />
                                    <div className={showModalImageAdd ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code">
                                        <img src={scanImage} alt="" className="img-responsive" />
                                        <p>Scan To See</p>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Project Starter 3</h3>
                                        <div>
                                            <img src={trendImage} alt="" />
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Open project</button>
                                                <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                    project</button>
                                                <button className="dropdown-item" href="#">Duplicate project</button>
                                                <button className="dropdown-item" href="#">Delete project</button>
                                                <button className="dropdown-item" href="#">Version history</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <div className="title d-flex justify-content-between">
                                        <p className="status"> <span className="status-legend not-published mr-2"></span><span className="status-text">Not
                                            Published</span></p>
                                        <div className="views align-self-center p-1 pr-3">
                                            Views: <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* first section 3 image ends  onClick="showFolderDetails()" */}


                    <div className="row section-folders">

                        <div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>
                            

                            {/* <div className="col" style={{ marginBottom: "0px" }}>
                            <div className="card text-left gutters">
                                <div className="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Rename folder</button>
                                                <button className="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span>
                                        Created by: <span className="created">Name</span>
                                    </p>
                                    <p className="proj-count-wrapper proj-count-wrapper"><span className="proj-count mt-3">3</span>Projects</p>
                                    <p></p>
                                </div>
                            </div>
                        </div> */}


<div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>


                            <div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>

                            <div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>

                            <div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>


                            <div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>

                            <div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>
                            <div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>
                            <div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>
                            <div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>
                            <div class="col" style={{ marginBottom: "0px" }}>
                            <div class="card text-left gutters">
                                <div class="card-image-container" onClick={() => { setShowFolderDetails(true); setShowAllProjects(!showAllProjects) }}>
                                    <img src={secondFolderImage1} alt="" className="img-fluid" />
                                    <img src={secondFolderImage2} alt="" className="img-fluid" />
                                    <img src={secondFolderImage3} alt="" className="img-fluid" />
                                </div>
                                <div class="card-body">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src={dot1} class="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div class="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button class="dropdown-item" href="#">Rename folder</button>
                                                <button class="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="card-text">
                                        Date Created: <span class="date">12th April 2022</span> <br/>
                                            Created by: <span class="created">Name</span> <br/>
                                            </p><p class="proj-count-wrapper proj-count-wrapper"><span class="proj-count mt-3">3</span>
                                                Projects</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- section grid ends -->
      <!-- section tiles starts --> */}
                    {/* tiles_start */}
                    <div className={activeTiles ? "container-fluid section-tiles active" : "container-fluid section-tiles d-none"}>
                        <div className="row shadow-sm p-2 justify-content-between mb-3">
                            <div className="left d-md-flex d-sm-block flex-md-row flex-sm-column">
                                <div className="card-image-container position-relative" onMouseEnter={() => setModalShow(!modalShow)} onMouseLeave={() => setModalShow(false)}>
                                    <img src={imageActive1} className="card-img-top project-image" alt="..." />
                                    <div className={modalShow ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectWOModal">View
                                            Project</button>
                                    </div>
                                </div>
                                <div className="title-container text-left d-block ml-3 mt-n2">
                                    <p className="card-text">
                                        <h3 className="card-title text-uppercase">Using the Gyro</h3>
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <p className="status"> <span className="status-legend published mr-2"></span><span
                                        className="status-text">Published</span></p>
                                </div>
                            </div>
                            <div className="right d-md-flex flex-lg-row">
                                <div className="views-container d-flex flex-column justify-content-between mr-3">
                                    <div className="view-ar visible btn-call-to-action mt-1">
                                        <button className="btn btn-secondary">View in AR</button>
                                    </div>
                                    <div className="d-block views-icons text-right mt-4">
                                        <img src={trendImage} alt="" />
                                        <img src={dot1} className="context-menu dropdown-toggle cup" alt=""
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                        <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                            <button className="dropdown-item" href="#">Open project</button>
                                            <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                project</button>
                                            <button className="dropdown-item" href="#">Duplicate project</button>
                                            <button className="dropdown-item" href="#">Delete project</button>
                                            <button className="dropdown-item" href="#">Version history</button>
                                        </div>
                                    </div>
                                    <div className="views align-self-center p-1 pr-3 mb-2">
                                        Views: <span>1</span>
                                    </div>
                                </div>
                                <div className="scan-code">
                                    <img src={scanImage} alt="" className="img-responsive" />
                                    <p className="text-uppercase mt-1">Scan To See</p>
                                </div>
                            </div>
                            {/* <div className="right d-md-flex d-sm-block flex-lg-row flex-sm-column">
                            <div className="views-container d-flex flex-column justify-content-between mr-3">
                                <div className="d-block text-right mt-4">
                                    <div className="title d-flex justify-content-between">
                                        <div className="dotImageNew">
                                            <img src={trendImage} alt="" />
                                            <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />


                                           
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Open project</button>
                                                <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                    project</button>
                                                <button className="dropdown-item" href="#">Duplicate project</button>
                                                <button className="dropdown-item" href="#">Delete project</button>
                                                <button className="dropdown-item" href="#">Version history</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="views align-self-center p-1 pr-3 mb-2">
                                    Views: <span>1</span>
                                </div>
                            </div>
                            <div className="scan-code">
                                <img src={scanImage} alt="" className="img-responsive" />
                                <p className="text-uppercase mt-1">Scan To See</p>
                            </div>
                        </div> */}
                        </div>

                        <div className="row shadow-sm p-2 justify-content-between mb-3">
                            <div className="left d-md-flex d-sm-block flex-md-row flex-sm-column">
                                <div className="card-image-container position-relative" onMouseEnter={() => setModalShowNeww(!modalShowNeww)} onMouseLeave={() => setModalShowNeww(false)}>
                                    <img src={imageActive1} className="card-img-top project-image" alt="..." />
                                    <div className={modalShowNeww ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectWOModal">View
                                            Project</button>
                                    </div>
                                </div>
                                <div className="title-container text-left d-block ml-3 mt-n2">
                                    <p className="card-text">
                                        <h3 className="card-title text-uppercase">Using the Gyro</h3>
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <p className="status"> <span className="status-legend published mr-2"></span><span
                                        className="status-text">Published</span></p>
                                </div>
                            </div>
                            <div className="right d-md-flex flex-lg-row">
                                <div className="views-container d-flex flex-column justify-content-between mr-3">
                                    <div className="view-ar visible btn-call-to-action mt-1">
                                        {/* <button className="btn btn-secondary">View in AR</button> */}
                                    </div>
                                    <div className="d-block views-icons text-right mt-4">
                                        <img src={trendImage} alt="" />
                                        <img src={dot1} className="context-menu dropdown-toggle cup" alt=""
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                        <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                            <button className="dropdown-item" href="#">Open project</button>
                                            <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                project</button>
                                            <button className="dropdown-item" href="#">Duplicate project</button>
                                            <button className="dropdown-item" href="#">Delete project</button>
                                            <button className="dropdown-item" href="#">Version history</button>
                                        </div>
                                    </div>
                                    <div className="views align-self-center p-1 pr-3 mb-2">
                                        Views: <span>1</span>
                                    </div>
                                </div>
                                <div className="scan-code">
                                    <img src={scanImage} alt="" className="img-responsive" />
                                    <p className="text-uppercase mt-1">Scan To See</p>
                                </div>
                            </div>
                            {/* <div className="right d-md-flex d-sm-block flex-lg-row flex-sm-column">
                                <div className="views-container d-flex flex-column justify-content-between mr-3">
                                    <div className="d-block text-right mt-4">
                                        <div className="title d-flex justify-content-between">
                                            <div className="dotImageNew">
                                                <img src={trendImage} alt="" />
                                                <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />


                                              
                                                <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                    <button className="dropdown-item" href="#">Open project</button>
                                                    <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                        project</button>
                                                    <button className="dropdown-item" href="#">Duplicate project</button>
                                                    <button className="dropdown-item" href="#">Delete project</button>
                                                    <button className="dropdown-item" href="#">Version history</button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="views align-self-center p-1 pr-3 mb-2">
                                        Views: <span>1</span>
                                    </div>
                                </div>
                                <div className="scan-code">
                                    <img src={scanImage} alt="" className="img-responsive" />
                                    <p className="text-uppercase mt-1">Scan To See</p>
                                </div>
                            </div> */}
                        </div>



                        <div className="row shadow-sm p-2 justify-content-between mb-3">
                            <div className="left d-md-flex d-sm-block flex-md-row flex-sm-column">
                                <div className="card-image-container position-relative" onMouseEnter={() => setmodalShowSecond(!modalShowSecond)} onMouseLeave={() => setmodalShowSecond(false)}>
                                    <img src={imageActive2} className="card-img-top project-image" alt="..." />
                                    <div className={modalShowSecond ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                </div>
                                <div className="title-container text-left d-block ml-3 mt-n2">
                                    <p className="card-text">
                                        <h3 className="card-title text-uppercase">Demo 1</h3>
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <p className="status"> <span className="status-legend published mr-2"></span><span
                                        className="status-text">Published</span></p>
                                </div>
                            </div>
                            <div className="right d-md-flex flex-lg-row">
                                <div className="views-container d-flex flex-column justify-content-between mr-3">
                                    <div className="view-ar visible btn-call-to-action mt-1">
                                        {/* <button className="btn btn-secondary">View in AR</button> */}
                                    </div>
                                    <div className="d-block views-icons text-right mt-4">
                                        <img src={trendImage} alt="" />
                                        <img src={dot1} className="context-menu dropdown-toggle cup" alt=""
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                        <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                            <button className="dropdown-item" href="#">Open project</button>
                                            <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                project</button>
                                            <button className="dropdown-item" href="#">Duplicate project</button>
                                            <button className="dropdown-item" href="#">Delete project</button>
                                            <button className="dropdown-item" href="#">Version history</button>
                                        </div>
                                    </div>
                                    <div className="views align-self-center p-1 pr-3 mb-2">
                                        Views: <span>1</span>
                                    </div>
                                </div>
                                <div className="scan-code">
                                    <img src={scanImage} alt="" className="img-responsive" />
                                    <p className="text-uppercase mt-1">Scan To See</p>
                                </div>
                            </div>
                            {/* <div className="right d-md-flex d-sm-block flex-lg-row flex-sm-column">
                                <div className="views-container d-flex flex-column justify-content-between mr-3">
                                    <div className="d-block text-right mt-4">
                                        <div className="title d-flex justify-content-between">
                                            <div className="dotImageNew">
                                                <img src={trendImage} alt="" />
                                                <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                    <button className="dropdown-item" href="#">Open project</button>
                                                    <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                        project</button>
                                                    <button className="dropdown-item" href="#">Duplicate project</button>
                                                    <button className="dropdown-item" href="#">Delete project</button>
                                                    <button className="dropdown-item" href="#">Version history</button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="views align-self-center p-1 pr-3 mb-2">
                                        Views: <span>1</span>
                                    </div>
                                </div>
                                <div className="scan-code">
                                    <img src={scanImage} alt="" className="img-responsive" />
                                    <p className="text-uppercase mt-1">Scan To See</p>
                                </div>
                            </div> */}
                        </div>


                        <div className="row shadow-sm p-2 justify-content-between mb-3">
                            <div className="left d-md-flex d-sm-block flex-md-row flex-sm-column">
                                <div className="card-image-container position-relative" onMouseEnter={() => setModalThird(!modalThird)} onMouseLeave={() => setModalThird(false)}>
                                    <img src={imageActive3} className="card-img-top project-image" alt="..." />
                                    <div className={modalThird ? "menu align-center flex-column btn-call-to-action" : "menu align-center flex-column btn-call-to-action d-none"}>
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                </div>
                                <div className="title-container text-left d-block ml-3 mt-n2">
                                    <p className="card-text">
                                        <h3 className="card-title text-uppercase">Project Starter 3</h3>
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Blippar</span>
                                    </p>
                                    <p className="status"> <span className="status-legend not-published mr-2"></span><span className="status-text">Not
                                        Published</span></p>
                                </div>
                            </div>
                            <div className="right d-md-flex flex-lg-row">
                                <div className="views-container d-flex flex-column justify-content-between mr-3">
                                    <div className="view-ar visible btn-call-to-action mt-1">
                                        {/* <button className="btn btn-secondary">View in AR</button> */}
                                    </div>
                                    <div className="d-block views-icons text-right mt-4">
                                        <img src={trendImage} alt="" />
                                        <img src={dot1} className="context-menu dropdown-toggle cup" alt=""
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                        <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                            <button className="dropdown-item" href="#">Open project</button>
                                            <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                project</button>
                                            <button className="dropdown-item" href="#">Duplicate project</button>
                                            <button className="dropdown-item" href="#">Delete project</button>
                                            <button className="dropdown-item" href="#">Version history</button>
                                        </div>
                                    </div>
                                    <div className="views align-self-center p-1 pr-3 mb-2">
                                        Views: <span>1</span>
                                    </div>
                                </div>
                                <div className="scan-code">
                                    <img src={scanImage} alt="" className="img-responsive" />
                                    <p className="text-uppercase mt-1">Scan To See</p>
                                </div>
                            </div>
                            {/* <div className="right d-md-flex d-sm-block flex-lg-row flex-sm-column">

                                <div className="views-container d-flex flex-column justify-content-between mr-3">
                                    <div className="d-block text-right mt-4">
                                        <div className="title d-flex justify-content-between">
                                            <div className="dotImageNew">
                                                <img src={trendImage} alt="" />
                                                <img src={dot1} className="context-menu dropdown-toggle cup" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                    <button className="dropdown-item" href="#">Open project</button>
                                                    <button className="dropdown-item" data-toggle="modal" data-target="#previewProjectModal">Preview
                                                        project</button>
                                                    <button className="dropdown-item" href="#">Duplicate project</button>
                                                    <button className="dropdown-item" href="#">Delete project</button>
                                                    <button className="dropdown-item" href="#">Version history</button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="views align-self-center p-1 pr-3 mb-2">
                                        Views: <span>1</span>
                                    </div>
                                </div>

                                <div className="scan-code">
                                    <img src={scanImage} alt="" className="img-responsive" />
                                    <p className="text-uppercase mt-1">Scan To See</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>


                {/* <!-- section tiles end -->*/}

                {/*<!-- footer starts --> */}

                <footer className="bg-dark">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-between">
                            <div className="col-sm-9 pt-md-5 pt-sm-2 left ">
                                <ul className="mt-5 footerNew footerNewOne" style={{ marginLeft: "-55.5%" }} >
                                    <li>All Rights Reserved 2022 © Blippar Group Limited</li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Terms</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 text-right pt-1 mt-sm-2 mt-md-5 pr-5 right">
                                <a href="/head"><img src={image4} alt="Icon To Top" className="icon-to-top" /></a>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <footer className="bg-dark">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-between">
                            <div className="col-sm-9 pt-md-5 pt-sm-2 left">
                                <ul className="mt-5 footerNew" style={{ marginLeft: "-55.5%" }} >
                                    <li>All Rights Reserved 2022 © Blippar Group Limited</li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Terms</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 text-right pt-1 mt-sm-2 mt-md-5 pr-5 right">
                                <a href="/head"><img src={image4} alt="Icon To Top" className="icon-to-top" /></a>
                            </div>
                        </div>
                    </div>
                </footer> */}
                {/* <footer className="bg-dark">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="col-sm-9 pt-md-5 pt-sm-2 left">
                            <div className="mt-5 footerNew">
                                <span>All Rights Reserved 2022 © Blippar Group Limited</span>
                                <span><a href="#">Privacy</a></span>
                                <span><a href="#">Terms</a></span>
                            </div>
                        </div>
                        <div className="col-sm-3 text-right pt-1 mt-sm-2 mt-md-5 pr-5 right">
                            <a href="/head"><img src={image4} alt="Icon To Top" className="icon-to-top" /></a>
                        </div>
                    </div>
                </div>
            </footer> */}

                {/* <footer className="bg-dark">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-9 pt-md-5 pt-sm-2 left">
                            <ul className="mt-5 footerNew">
                                <span><li>All Rights Reserved 2022 © Blippar Group Limited</li></span>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 text-right pt-1 mt-sm-2 mt-md-5 pr-5 right">
                            <a href="/head"><img src={image4} alt="Icon To Top" className="icon-to-top" /></a>
                        </div>
                    </div>
                </div>
            </footer> */}


                {/* <!-- footer ends -->

  <!-- modals -->

  <!-- new project modal begin --> */}

                <div className="modal fade new-project-modal" id="newProjectModal" tabIndex="-1" role="dialog" data-backdrop="static"
                    aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">


                        <div className={slideName == 'slide-np1' ? "modal-content slide-np1 active" : "modal-content slide-np1 d-none"}>
                            <button type="button" className="new-project-modal-close close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><img src={crossIcon} alt="" /></span>
                            </button>
                            <div className="modal-header text-center d-block flex-column">
                                <h5 className="modal-title d-inline-block">New Project</h5>
                                <p className="modal-subtitle d-block">
                                    Let's get creating!
                                </p>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label className="projectNameNew" for="project-name">Give your project a name</label>
                                    <input type="text" className="form-control" name="" id="project-name" aria-describedby="project-name" placeholder="Project Name" />
                                    <div className="d-block text-center btn-call-to-action">
                                        <button className="btn btn-secondary" onClick={() => showNext("slide-np2")}>Continue</button>
                                    </div>
                                </div>
                            </div>
                            <ul className="carousel-dots d-block text-center">
                                <li className="dot-1 active"></li>
                                <li className="dot-2 "></li>
                                <li className="dot-3"></li>
                            </ul>
                        </div>






                        <div className={slideName == "slide-np2" ? "modal-content slide-np2 active" : "modal-content slide-np2 d-none"}>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><img src={crossIcon} alt="" /></span>
                            </button>
                            <div className="modal-header text-center d-block flex-column">
                                <h5 className="modal-title d-inline-block">New Project</h5>
                                <p className="modal-subtitle d-block">
                                    Select how you would like to use AR
                                </p>
                            </div>
                            <div className="modal-body mt-n4">
                                <div className="row p-3">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="card text-left gutters position-relative">
                                            <div className="card-image-container p-4">


                                                <video className="vedeosection" width="295px" height="164px" autoPlay={true} controls loop
                                                //poster={placeholderNewOne}
                                                >
                                                    <source src="https://durgapanda.github.io/Blippar/videos/Tracked.mp4" type="video/mp4" />
                                                    <source src="movie.ogg" type="video/ogg" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div className="card-body d-block text-center">
                                                <p className="card-text mt-n4">
                                                    Create AR that appears on flat surfaces like floor tiles or textured surfaces. AR examples
                                                    include,
                                                    seeing virtual products, virtual assistants, architectural visualisations, 3D scenes etc.
                                                </p>
                                                <div className="d-block text-center btn-call-to-action">
                                                    <button className="btn btn-secondary" onClick={() => showNext("slide-np3")}>Use a surface</button>
                                                    <p className="text-warning mt-3">View an example</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="card text-left gutters position-relative">
                                            <div className="card-image-container p-4">


                                                <video className="vedeosection" width="295px" height="164px" controls loop
                                                    autoPlay={true}
                                                //poster={slidersecond}
                                                >
                                                    <source src="https://durgapanda.github.io/Blippar/videos/Slam.mp4" type="video/mp4" />
                                                    <source src="movie.ogg" type="video/ogg" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div className="card-body d-block text-center">
                                                <p className="card-text mt-n4">
                                                    Create AR that appears on flat surfaces like floor tiles or textured surfaces. AR examples
                                                    include,
                                                    seeing virtual products, virtual assistants, architectural visualisations, 3D scenes etc.
                                                </p>
                                                <div className="d-block text-center btn-call-to-action">
                                                    <button className="btn btn-secondary" onClick={() => showNext("slide-np3")}>Use a surface</button>
                                                    <p className="text-warning mt-3">View an example</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="card text-left gutters position-relative">
                                            <div className="card-image-container p-4">


                                                <video className="vedeosection" width="295px" height="164px" autoPlay={true} loop controls
                                                //poster={sliderThird}
                                                >
                                                    <source src="https://durgapanda.github.io/Blippar/videos/Gyro.mp4" type="video/mp4" autoPlay />
                                                    <source src="movie.ogg" type="video/ogg" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div className="card-body d-block text-center">

                                                <p className="card-text mt-n4">
                                                    Create AR that appears around the user. This option does not require a marker or a surface to
                                                    present the AR. AR examples include, virtual stores, floating environments, floating menus etc.
                                                </p>
                                                <div className="d-block text-center btn-call-to-action">
                                                    <button className="btn btn-secondary" onClick={() => showNext("slide-np3")}>Around you</button>
                                                    <p className="text-warning mt-3">View an example</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="carousel-dots d-block text-center">
                                    <li className="dot-1"></li>
                                    <li className="dot-2 active"></li>
                                    <li className="dot-3"></li>
                                </ul>
                            </div>
                        </div>





                        <div className={slideName == 'slide-np3' ? "modal-content slide-np3 active position-relative" : "modal-content slide-np3 d-none position-relative"}>
                            <ul className="menu-top bg-white">
                                <li className="menu-item list-style-none">Pause License</li>
                                <li className="menu-item">Download SDK bundle</li>
                                <li className="menu-item"></li>
                            </ul>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><img src={crossIcon} alt="" /></span>
                            </button>
                            <div className="modal-header text-center d-block flex-column">
                                <h5 className="modal-title d-inline-block">New Project</h5>
                                <p className="modal-subtitle d-block">
                                    Select and add your marker(s)
                                </p>
                            </div>
                            <div className="modal-body px-5 d-block text-center">
                                <div className="modal-body-content shadow-sm pt-5 pb-3">
                                    <img src={imagemodal5} alt="" />
                                    <p className="mt-3 mb-5 upload-marker-text">You can upload up to 10 markers. Use JPEGs, maximum file size 1mb
                                        per marker, 1024px
                                        high or wide</p>
                                    <div className="d-block text-center btn-call-to-action">
                                        <button className="btn btn-secondary" onClick={() => showNext('slide-np4')}>Browse and upload</button>
                                        <p className="text-warning mt-3">Autogenerate a marker</p>
                                    </div>
                                </div>
                                <p className="text-warning mt-2 text-left modal-footer-text">What makes a good marker? </p>
                                {/* <!-- carousel dots --> */}
                                <ul className="carousel-dots d-block text-center">
                                    <li className="dot-1"></li>
                                    <li className="dot-2"></li>
                                    <li className="dot-3 active"></li>
                                </ul>
                            </div>
                        </div>
                        <div className={slideName == 'slide-np4' || slideName == 'slide-d1' ? "modal-content slide-np4 active" : "modal-content slide-np4 d-none"}>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><img src={crossIcon} alt="" /></span>
                            </button>
                            <div className="modal-header text-center d-block flex-column">
                                <h5 className="modal-title d-inline-block">New Project</h5>
                                <p className="modal-subtitle d-block">
                                    Select and add your marker(s)
                                </p>
                            </div>
                            <div className="modal-body px-5 d-block text-center mt-n4">
                                <div className="modal-body-content shadow-sm px-3 py-1">
                                    <div className="preview-container">
                                        <div className="d-flex justify-content-start align-items-center pl-4 py-3 confirm-tile">
                                            <div className="img-wrapper align-center">
                                                <img src={imagePopup} alt="" />
                                            </div>
                                            <img src={deleteIcon} alt="" className="ml-5 mr-2 d-inline-block cup marker-delete" onClick={() => showNext("slide-d1")} />

                                            <img src={imageDownload} alt="" className="ml-3" />
                                            <span id="filename ml-4">Untitled1.jpg</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center pl-4 py-3 confirm-tile">
                                            <div className="img-wrapper align-center">
                                                <img src={imagePopup2} alt="" />
                                            </div>
                                            <img src={deleteIcon} alt="" className="ml-5 mr-2 d-inline-block cup marker-delete" onClick={() => showNext("slide-d1")} />
                                            <img src={imageDownload} alt="" className="ml-3" />
                                            <span className="filename ml-4">Untitled2.jpg</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center pl-4 py-3 confirm-tile">
                                            <div className="img-wrapper align-center">
                                                <img src={imagePopup3} alt="" />
                                            </div>
                                            <img src={deleteIcon} alt="" className="ml-5 mr-2 d-inline-block cup marker-delete" onClick={() => showNext("slide-d1")} />
                                            <img src={imageDownload} alt="" className="ml-3 d-inline-block cup" />
                                            <span className="filename ml-4">Untitled3.jpg</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center pl-4 py-3 confirm-tile">
                                            <div className="img-wrapper align-center">
                                                <img src={imagePopup3} alt="" />
                                            </div>
                                            <img src={deleteIcon} alt="" className="ml-5 mr-2 d-inline-block cup marker-delete" onClick={() => showNext("slide-d1")} />
                                            <img src={imageDownload} alt="" className="ml-3" />
                                            <span className="filename ml-4">Untitled3.jpg</span>
                                        </div>
                                    </div>
                                    <div className="d-block text-center btn-call-to-action mt-2">
                                        <button className="btn btn-secondary" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" onclick='resetSlides()' />Confirm</button>
                                        <p className="mt-3"><strong>3 of 10</strong> markers added. <span className="text-warning">Upload</span> or <span
                                            className="text-warning">Autogenerate a marker</span></p>
                                    </div>
                                </div>
                                <p className="text-warning mt-2 text-left modal-footer-text">What makes a good marker? </p>
                                {/* <!-- carousel dots --> */}
                                <ul className="carousel-dots d-block text-center">
                                    <li className="dot-1"></li>
                                    <li className="dot-2"></li>
                                    <li className="dot-3 active"></li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- modal dialog end --> */}

                    </div>
                </div>


                <div className={showAddProject ? "modal fade new-folder show" : "modal fade new-folder"} id="newFolderModal" tabindex="-1" data-backdrop="static" aria-labelledby="newFolderModal" style={showAddProject ? { display: "block", backgroundColor: "rgba(-252, -46, -229, 0.500)" } : { display: "none" }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

                        <div className="modal-content slide-f1 ">
                            <div className="modal-body flex-column">
                                <h5 className="modal-title d-block text-uppercase text-white text-center">New Folder</h5>
                                <div className="form-group d-block text-center">
                                    <label for="folder-name" className="text-white mb-4">Give your folder a name</label>
                                    <input type="text" className="form-control" name="" id="folder-name" aria-describedby="folder-name" placeholder="Folder Name" />
                                    <div className="d-block text-center btn-call-to-action mt-5">
                                        <button className="btn btn-white" onClick={() => { setShowAddProject(false); setConfirmProjetOrganise(!confirmProjetOrganise) }}>confirm</button>
                                        <button className="btn btn-white ml-3" onClick={() => { setShowAddProject(false) }}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={confirmProjetOrganise ? "modal fade new-folder show" : "modal fade delete-marker-modal "}>
                        <div className="modal-header text-center d-block flex-column">
                            <h5 className="modal-title d-inline-block"></h5>
                            <p className="modal-subtitle d-block">
                            </p>
                        </div>
                        <div className="modal-body flex-column">
                            <h5 className="modal-title d-block text-uppercase text-white text-center ">Organise your projects</h5>
                            <div className="form-group d-block text-center">
                                <p className="text-white">Simply drag and drop your projects into folders.</p>
                                <img src="images/new-folder-organise.png" alt="" />
                                <div className="d-block text-center btn-call-to-action mt-5">
                                    <button className="btn btn-white" data-dismiss="modal" aria-label="Close" onClick={() => "getFolderName('slide-f2')"}>Got it</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className={showAddProject ? "modal fade new-folder show" : "modal fade new-folder"} id="newFolderModal" tabIndex="-1" role="dialog" data-backdrop="static"
                    style={showAddProject ? { display: "block" } : { display: "none" }} aria-labelledby="newFolderModal" aria-hidden="false">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

                        <div className="modal-content slide-f1 ">
                            <div className="modal-body flex-column">
                                <h5 className="modal-title d-block text-uppercase text-white text-center">New Folder</h5>
                                <div className="form-group d-block text-center">
                                    <label for="folder-name" className="text-white mb-4">Give your folder a name</label>
                                    <input type="text" className="form-control" name="" id="folder-name" aria-describedby="folder-name" placeholder="Folder Name" />
                                    <div className="d-block text-center btn-call-to-action mt-5">
                                        <button className="btn btn-white" onClick={() => { setShowAddProject(false); setConfirmProjetOrganise(!confirmProjetOrganise) }}>confirm</button>
                                        <button className="btn btn-white ml-3" onClick={() => { setShowAddProject(false) }}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={confirmProjetOrganise ? "modal fade new-folder show" : "modal fade delete-marker-modal "}
                    id="projectOrganise" tabIndex="1" role="dialog" data-backdrop="static" style={confirmProjetOrganise ? { display: "block", backgroundColor: "rgba(46, 11, 14, 0.68)" } : { display: "none" }}
                    aria-labelledby="newFolderModal" aria-hidden="false">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center d-block flex-column">
                                <h5 className="modal-title d-inline-block"></h5>
                                <p className="modal-subtitle d-block">
                                </p>
                                <div className="modal-body GoItModal  flex-column">
                                    <h5 className="modal-title d-block text-uppercase text-white text-center ">Organise your projects</h5>
                                    <div className="form-group d-block text-center">
                                        <p className="text-white">Simply drag and drop your projects into folders.</p>
                                        <img src={imageFold} alt="" />
                                        <div className="d-block text-center btn-call-to-action mt-5">
                                            <button className="btn btn-white" data-dismiss="modal" aria-label="Close"
                                                onClick={() => setConfirmProjetOrganise(false)}>Got it</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className={slideName == 'slide-d1' ? "modal fade delete-marker-modal show" : "modal fade delete-marker-modal d-none"}

                    id="deleteMarkerModal" tabindex="1" data-backdrop="" aria-labelledby="deleteMarkerModal" style={{ zIndex: "999999", display: "block", paddingRight: "17px", ariaModal: "true", role: "dialog" }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

                        <div className="modal-content slide-d1" >
                            <div className="modal-body flex-column">
                                <h5 className="modal-title d-block text-uppercase text-white text-center">Delete Marker</h5>
                                <p className="modal-text text-white text-center">Confirm you wish to delete this marker?</p>
                                <div className="d-block text-center btn-call-to-action mt-3">
                                    <button className="btn btn-white btn-confirm-marker-delete">confirm</button>
                                    <button className="btn btn-white ml-3" onClick={() => showNext('slide-np4')}>Cancel</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>




                {/* <!-- view project modal starts--> */}




                <div className="modal fade " id="viewProjectModal" tabIndex="-1" role="dialog" data-backdrop="static"
                    aria-labelledby="viewProjectModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

                        <div className="modal-content slide-1 pb-3">
                            <button type="button" className="new-project-modal-close close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><img src={crossIcon} alt="" /></span>
                            </button>
                            <div className="modal-body row">
                                <div className="col-6 text-center">

                                    <h5 className="modal-title">View Project</h5>
                                    <p className="modal-text">
                                        Scan the QR code below using your smart device
                                    </p>
                                    <p>
                                        <img src={barcode} alt="" />
                                    </p>
                                    <p className="modal-text">
                                        Then point your device camera at the marker shown opposite <img src={arrorMark} alt="" />
                                    </p>


                                    <p className="modal-text mt-5 pt-3">
                                        Your <span className="text-uppercase">Live</span> project <span className="text-uppercase">URL</span> is: <br />
                                        <a href="https://ar.blippar.com/305075154" className="text-warning">https://ar.blippar.com/305075154</a> <span
                                            className="cup"><img src={dolarimage} alt="" /></span>
                                    </p>

                                    <div className="d-block text-center btn-call-to-action mt-5 pt-3 ">
                                        <button className="btn btn-secondary markerNew" style={{width:"340px",height:"70px"}}>Download QR and marker</button>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <img style={{ marginRight: "74px" }} src={barcadeSideImage} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>





                {/* <!-- view project modal ends-->

  <!-- view project modal starts--> */}

                <div className="modal fade modal-viewproj-wo" id="viewProjectWOModal" tabIndex="-1" role="dialog" data-backdrop="static"
                    aria-labelledby="viewProjectWOModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-md" role="document">

                        <div className="modal-content slide-1 pb-3">
                            <button type="button" className="new-project-modal-close close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><img src={crossIcon} alt="" /></span>
                            </button>
                            <div className="modal-body row">
                                <div className="col-12 text-center">

                                    <h5 className="modal-title">View Project</h5>
                                    <p className="modal-text">
                                        Scan the QR code below using your smart device
                                    </p>
                                    <p>
                                        <img src={barcode} alt="" />
                                    </p>
                                    <p className="modal-text">
                                        Then follow the on screen instructions  <img src={arrorMark} alt="" />
                                    </p>


                                    <p className="modal-text mt-5 pt-3">
                                        Your <span className="text-uppercase">Live</span> project <span className="text-uppercase">URL</span> is: <br />
                                        <a href="https://ar.blippar.com/305075154" className="text-warning">https://ar.blippar.com/305075154</a> <span
                                            className="cup"><img src={dolarimage} alt="" /></span>
                                    </p>
                                    <div className="d-block text-center btn-call-to-action mt-5 pt-3">
                                        <button className="btn btn-secondary">Download QR Code</button>
                                    </div>
                                    {/* <div className="d-block text-center btn-call-to-action mt-5 pt-3">
                                    <button className="btn btn-secondary">Download QR Code</button>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- view project modal ends-->

  <!-- preview project modal starts --> */}

                <div className="modal fade " id="previewProjectModal" tabIndex="-1" role="dialog" data-backdrop="static"
                    aria-labelledby="previewProjectModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

                        <div className="modal-content slide-pp1 pb-3">
                            <button type="button" className="new-project-modal-close close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><img src={crossIcon} alt="" /></span>
                            </button>
                            <div className="modal-body row">
                                <div className="col-6 text-center">

                                    <h5 className="modal-title">Preview Project</h5>
                                    <p className="modal-text">
                                        Scan the QR code below using your smart device
                                    </p>
                                    <p>
                                        <img src={barcode} alt="" />
                                    </p>
                                    <p className="modal-text">
                                        Then point your device camera at the marker shown opposite <img src={arrorMark} alt="" />
                                    </p>

                                    <div className="d-flex justify-content-center">
                                        <div className="expiry-time m-3 ">
                                            <p className="modal-text">Preview expires in: <br />
                                                <h5 className="mt-n2">14m 05s</h5>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="modal-text mt-5">
                                        Your <span className="text-uppercase">Preview</span> project URL is: <br />
                                        <a href="https://ar.blippar.com/305075154" className="text-warning">https://ar.blippar.com/305075154</a> <span
                                            className="cup"><img src={dolarimage} alt="" /></span>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <img src={previewImage} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- modal dialog end --> */}

                    </div>
                </div>

                {/* <!-- preview project modal ends -->

  <!-- publish project modal starts --> */}

                <div className="modal fade " id="publishProjectModal" tabIndex="-1" role="dialog" data-backdrop="static"
                    aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

                        <div className="modal-content slide-pp1 pb-3">
                            <button type="button" className="new-project-modal-close close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><img src={crossIcon} alt="" /></span>
                            </button>
                            <div className="modal-body row">
                                <div className="col text-center">

                                    <h5 className="modal-title mt-n3">Project Published<img src="images/    " alt="" className="mt-n2" />
                                    </h5>
                                    <p className="modal-text">
                                        Your project is now live and ready to share. <br />
                                        Scan the QR code below using your smart device.
                                    </p>
                                    <p>
                                        <img src={barcode} alt="" />
                                    </p>
                                    <p className="modal-text">
                                        Then point your device camera at the marker shown opposite <img src={arrorMark} alt="" />
                                    </p>


                                    <p className="modal-text mt-5 pt-3">
                                        Your <span className="text-uppercase">Live</span> project <span className="text-uppercase">URL</span> is: <br />
                                        <a href="https://ar.blippar.com/305075154" className="text-warning">https://ar.blippar.com/305075154</a> <span
                                            className="cup"><img src={dolarimage} alt="" /></span>
                                    </p>

                                    <div className="d-block text-center btn-call-to-action mt-5 pt-3">
                                        <button className="btn btn-secondary">Download QR and marker</button>
                                    </div>

                                </div>
                                <div className="col">
                                    <img src={previewImage} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- modal dialog end --> */}

                    </div>
                </div>

                {/* <!-- publish project modal ends --> */}


                <div className="backdrop d-none"></div>
            </div>

            )
}
            export default Projects;
