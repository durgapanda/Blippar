import "./project.css";
//import "./font.css";
import logo from '../assets/images/logo.svg';
import ddArrowDown from '../assets/images/icon-caret-down.svg';
import menu from  '../assets/images/icon-hamburger-menu.svg';
import folder from '../assets/images/icon-folder.svg';
import f1Image from '../assets/images/img-f1.png';
import scanImage from '../assets/images/scan.png';
import trendImage from '../assets/images/icon-trend.svg'
const Projects = () => {

    return (

        <div className="text-center">
            {/* <!-- header starts --> */}
            <div className="container-fluid">

                <header className="header row">

                    <div className="logo-section col-sm-4 my-5">
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
                    <div className="profile-section col-sm-8 text-right my-5">
                        <button type="button" className="btn btn-white-o learn text-uppercase text-bold">Learn</button>
                        <div className="dropdown d-inline ml-2">
                            <a className="btn dropdown-toggle text-white avatar" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-expanded="true">
                                <span className="initials d-inline-block">SS</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-secondary bg-dark btn-new-proj px-5 text-uppercase" data-toggle="modal"
                        data-target="#newProjectModal" onclick="showNext('slide-np1')">Create A New Project</button>
                </header>

                {/* <!-- header ends -->
    
          <!-- section-options starts --> */}
                <div className="container-fluid">
                    <section className="justify-content-between row section-options mb-3">
                        <div className="subnav">
                            <span className="subtitle">Your Projects</span>
                            <div className="dropdown open d-inline">
                                <button className="btn btn-secondary-o dropdown-toggle text-uppercase dropdown-sort ml-4 pl-4 py-2"
                                    type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                        <div className="subnav">
                            <img src={menu} alt="Icon Menu" width="32px" height="24px"
                                className="cup subnav-icon icon-tiles" onclick="showView('tile')" />
                            <img src={menu}  alt="Icon Menu" width="32px" height="27px"
                                className="cup d-none subnav-icon icon-grid" onclick="showView('grid')" />
                            <img src={folder} data-toggle="modal" data-target="#newFolderModal"
                                className="d-inline-block ml-3 cup" alt="Icon Folder" width="32px" height="28px"
                                onclick="showNext('slide-f1')" />
                        </div>
                    </section>
                </div>
                {/* <!-- section options end -->
          <!-- section grid starts --> */}
                <div className="container-fluid section-grid active">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2 position-relative">
                                    <img src={f1Image} className="card-img-top project-image" alt="..." onclick="showMenu(this)" />
                                    <div className="menu align-center flex-column btn-call-to-action d-none">
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectWOModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code"><img src={scanImage} alt="" className="img-responsive" /></div>
                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Using the Gyro</h3>
                                        <div>
                                            <img src={trendImage} alt="" />
                                            <img src="images/icon-context-menu.svg" className="ml-3 dropdown-toggle cup" alt=""
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
                        <div className="col-lg-4 col-md-6">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2">
                                    <img src="images/img-2.png" className="card-img-top project-image" alt="..." onclick="showMenu(this)" />
                                    <div className="menu align-center flex-column btn-call-to-action d-none">
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code"><img src="images/scan.png" alt="" className="img-responsive" /></div>
                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Demo 1</h3>
                                        <div>
                                            <img src={trendImage} alt="" />
                                            <img src="images/icon-context-menu.svg" className="pl-2 dropdown-toggle cup" alt=""
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

                        <div className="col-lg-4 col-md-6">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2">
                                    <img src="images/img-3.png" className="card-img-top project-image" alt="..." onclick="showMenu(this)" />
                                    <div className="menu align-center flex-column btn-call-to-action d-none">
                                        <button className="btn btn-white">Open Project</button>
                                        <button className="btn btn-white mt-4" data-toggle="modal" data-target="#viewProjectModal">View
                                            Project</button>
                                    </div>
                                    <div className="scan-code"><img src="images/scan.png" alt="" className="img-responsive" /></div>
                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Project Starter 3</h3>
                                        <div>  
                                            <img src={trendImage} alt="" />
                                            <img src="images/icon-context-menu.svg" className="pl-2 dropdown-toggle cup" alt=""
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false/" />
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
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2">
                                    <img src={f1Image} className="card-img-top project-image" alt="..." />

                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src="images/icon-context-menu.svg" className="pl-2 dropdown-toggle cup" alt=""
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Rename folder</button>
                                                <button className="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Name</span> <br />
                                        <p className="proj-count-wrapper "><span className="proj-count mt-3">3</span>
                                            Projects</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2">
                                    <img src="images/img-f1.png" className="card-img-top project-image" alt="..." />

                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src="images/icon-context-menu.svg" className="pl-2 dropdown-toggle cup" alt=""
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Rename folder</button>
                                                <button className="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Name</span> <br />
                                        <p className="proj-count-wrapper"><span className="proj-count mt-3">3</span> Projects</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-2">
                                    <img src="images/img-f1.png" className="card-img-top project-image" alt="..." />

                                </div>
                                <div className="card-body">
                                    <div className="title d-flex justify-content-between">
                                        <h3 className="card-title text-uppercase">Folder name</h3>
                                        <div>
                                            <img src="images/icon-context-menu.svg" className="pl-2 dropdown-toggle cup" alt=""
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-sort-options" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#">Rename folder</button>
                                                <button className="dropdown-item" href="#">Delete folder and contents</button>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text">
                                        Date Created: <span className="date">12th April 2022</span> <br />
                                        Created by: <span className="created">Name</span> <br />
                                        <p className="proj-count-wrapper"><span className="proj-count mt-3">3</span> Projects</p>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* <!-- section grid ends -->
      <!-- section tiles starts --> */}
                <div className="container-fluid section-tiles d-none">
                    <div className="row shadow-sm p-2 justify-content-between mb-3">
                        <div className="d-flex flex-row">
                            <div className="card-image-container position-relative">
                                <img src="images/img-t1.png" className="card-img-top project-image" alt="..." onclick="showMenu(this)" />
                                <div className="menu align-center flex-column btn-call-to-action d-none">
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
                        <div className="d-flex flex-row">
                            <div className="views-container d-flex flex-column justify-content-between mr-3">
                                <div className="d-block text-right mt-4">
                                    <img src={trendImage} alt="" />
                                    <img src="images/icon-context-menu.svg" className="pl-2" alt="" />
                                </div>
                                <div className="views align-self-center p-1 pr-3 mb-2">
                                    Views: <span>1</span>
                                </div>
                            </div>
                            <div className="scan-code mt-3">
                                <img src="images/scan.png" alt="" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                    <div className="row shadow-sm p-2 justify-content-between mb-3">
                        <div className="d-flex flex-row">
                            <div className="card-image-container position-relative">
                                <img src="images/img-t2.png" className="card-img-top project-image" alt="..." onclick="showMenu(this)" />
                                <div className="menu align-center flex-column btn-call-to-action d-none">
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
                        <div className="d-flex flex-row">
                            <div className="views-container d-flex flex-column justify-content-between mr-3">
                                <div className="d-block text-right mt-4">
                                    <img src={trendImage} alt="" />
                                    <img src="images/icon-context-menu.svg" className="pl-2" alt="" />
                                </div>
                                <div className="views align-self-center p-1 pr-3 mb-2">
                                    Views: <span>1</span>
                                </div>
                            </div>
                            <div className="scan-code mt-3">
                                <img src="images/scan.png" alt="" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                    <div className="row shadow-sm p-2 justify-content-between mb-3">
                        <div className="d-flex flex-row">
                            <div className="card-image-container position-relative">
                                <img src="images/img-t3.png" className="card-img-top project-image" alt="..." onclick="showMenu(this)" />
                                <div className="menu align-center flex-column btn-call-to-action d-none">
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
                        <div className="d-flex flex-row">
                            <div className="views-container d-flex flex-column justify-content-between mr-3">
                                <div className="d-block text-right mt-4">
                                    <img src={trendImage} alt="" />
                                    <img src="images/icon-context-menu.svg" className="pl-2" alt="" />
                                </div>
                                <div className="views align-self-center p-1 pr-3 mb-2">
                                    Views: <span>1</span>
                                </div>
                            </div>
                            <div className="scan-code mt-3">
                                <img src="images/scan.png" alt="" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
      {/* <!-- section tiles end -->*/}

       {/*<!-- footer starts --> */}
    <footer className="bg-dark">
        <div className="container-fluid">
            <div className="row d-flex justify-content-between">
                <div className="col-md-9 pt-5 left">
                    <ul className="mt-5">
                        <li>All Rights Reserved 2022 &copy; Blippar Group Limited</li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
                <div className="col-md-3 text-right pt-1 mt-5 pr-5 right">
                    <a href="#head"><img src="images/icon-top.svg" alt="Icon To Top" className="icon-to-top" /></a>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- footer ends -->

  <!-- modals -->

  <!-- new project modal begin --> */}

    <div className="modal fade new-project-modal" id="newProjectModal" tabindex="-1" role="dialog" data-backdrop="static"
        aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

            <div className="modal-content slide-np1 d-none">
                <button type="button" className="new-project-modal-close close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="images/icon-close.svg" alt="" /></span>
                </button>
                <div className="modal-header text-center d-block flex-column">
                    <h5 className="modal-title d-inline-block">New Project</h5>
                    <p className="modal-subtitle d-block">
                        Let's get creating!
                    </p>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label for="project-name">Give your project a name</label>
                        <input type="text" className="form-control" name="" id="project-name" aria-describedby="project-name"
                            placeholder="Project Name" />
                        <div className="d-block text-center btn-call-to-action">
                            <button className="btn btn-secondary" onclick='showNext("slide-np2")'>Continue</button>
                        </div>
                    </div>
                </div>
                <ul className="carousel-dots mt-3 d-block text-center">
                    <li className="dot-1 active"></li>
                    <li className="dot-2 "></li>
                    <li className="dot-3"></li>
                </ul>
            </div>

            <div className="modal-content slide-np2 d-none">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="images/icon-close.svg" alt="" /></span>
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
                            <div className="card text-left gutters">
                                <div className="card-image-container p-4">
                                    <img src="images/placeholder1.png" className="card-img-top project-image" alt="..." />


                                </div>
                                <div className="card-body d-block text-center">

                                    <p className="card-text mt-n5">
                                        Create AR using a printed 'marker'. Your AR experience will present overlaid on top of this.
                                        Marker examples include packaging, product labels, posters, magazines, manuals etc.
                                    </p>
                                    <div className="d-block text-center btn-call-to-action">
                                        <button className="btn btn-secondary" onclick='showNext("slide-np3")'>Use a marker</button>
                                        <p className="text-warning mt-3">View an example</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-4">
                                    <img src="images/placeholder2.png" className="card-img-top project-image" alt="..." />


                                </div>
                                <div className="card-body d-block text-center">
                                    <p className="card-text mt-n4">
                                        Create AR that appears on flat surfaces like floor tiles or textured surfaces. AR examples
                                        include,
                                        seeing virtual products, virtual assistants, architectural visualisations, 3D scenes etc.
                                    </p>
                                    <div className="d-block text-center btn-call-to-action">
                                        <button className="btn btn-secondary" onclick='showNext("slide-np3")'>Use a surface</button>
                                        <p className="text-warning mt-3">View an example</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card text-left gutters">
                                <div className="card-image-container p-4">
                                    <img src="images/placeholder3.png" className="card-img-top project-image" alt="..." />


                                </div>
                                <div className="card-body d-block text-center">

                                    <p className="card-text mt-n4">
                                        Create AR that appears around the user. This option does not require a marker or a surface to
                                        present the AR. AR examples include, virtual stores, floating environments, floating menus etc.
                                    </p>
                                    <div className="d-block text-center btn-call-to-action">
                                        <button className="btn btn-secondary" onclick='showNext("slide-np3")'>Around you</button>
                                        <p className="text-warning mt-3">View an example</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="carousel-dots mt-3 d-block text-center">
                        <li className="dot-1"></li>
                        <li className="dot-2 active"></li>
                        <li className="dot-3"></li>
                    </ul>
                </div>
            </div>

            <div className="modal-content slide-np3 d-none position-relative">
                <ul className="menu-top bg-white">
                    <li className="menu-item list-style-none">Pause License</li>
                    <li className="menu-item">Download SDK bundle</li>
                    <li className="menu-item"></li>
                </ul>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="images/icon-close.svg" alt="" /></span>
                </button>
                <div className="modal-header text-center d-block flex-column">
                    <h5 className="modal-title d-inline-block">New Project</h5>
                    <p className="modal-subtitle d-block">
                        Select and add your marker(s)
                    </p>
                </div>
                <div className="modal-body px-5 d-block text-center">
                    <div className="modal-body-content shadow-sm pt-5 pb-3">
                        <img src="images/upload-marker.png" alt="" />
                        <p className="mt-3 mb-5 upload-marker-text">You can upload up to 10 markers. Use JPEGs, maximum file size 1mb
                            per marker, 1024px
                            high or wide</p>
                        <div className="d-block text-center btn-call-to-action">
                            <button className="btn btn-secondary" onclick="showNext('slide-np4')">Browse and upload</button>
                            <p className="text-warning mt-3">Autogenerate a marker</p>
                        </div>
                    </div>
                    <p className="text-warning mt-2 text-left modal-footer-text">What makes a good marker? </p>
                    {/* <!-- carousel dots --> */}
                    <ul className="carousel-dots mt-3 d-block text-center">
                        <li className="dot-1"></li>
                        <li className="dot-2"></li>
                        <li className="dot-3 active"></li>
                    </ul>
                </div>
            </div>
            <div className="modal-content slide-np4 active">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="images/icon-close.svg" alt="" /></span>
                </button>
                <div className="modal-header text-center d-block flex-column">
                    <h5 className="modal-title d-inline-block">New Project</h5>
                    <p className="modal-subtitle d-block">
                        Select and add your marker(s)
                    </p>
                </div>
                <div className="modal-body px-5 d-block text-center mt-n4">
                    <div className="modal-body-content shadow-sm p-3">
                        <div className="preview-container">
                            <div className="d-flex justify-content-start align-items-center pl-4 py-3 confirm-tile">
                                <div className="img-wrapper align-center">
                                    <img src="images/preview-1.png" alt="" />
                                </div>
                                <img src="images/icon-delete.svg" alt="" className="ml-5 mr-2 d-inline-block cup marker-delete" />
                                <img src="images/icon-download.svg" alt="" className="ml-3" />
                                <span className="filename ml-4">Untitled1.jpg</span>
                            </div>
                            <div className="d-flex justify-content-start align-items-center pl-4 py-3 confirm-tile">
                                <div className="img-wrapper align-center">
                                    <img src="images/preview-2.png" alt="" />
                                </div>
                                <img src="images/icon-delete.svg" alt="" className="ml-5 mr-2 d-inline-block cup marker-delete" />
                                <img src="images/icon-download.svg" alt="" className="ml-3" />
                                <span className="filename ml-4">Untitled2.jpg</span>
                            </div>
                            <div className="d-flex justify-content-start align-items-center pl-4 py-3 confirm-tile">
                                <div className="img-wrapper align-center">
                                    <img src="images/preview-3.png" alt="" />
                                </div>
                                <img src="images/icon-delete.svg" alt="" className="ml-5 mr-2 d-inline-block cup marker-delete" />
                                <img src="images/icon-download.svg" alt="" className="ml-3 d-inline-block cup" />
                                <span className="filename ml-4">Untitled3.jpg</span>
                            </div>
                            <div className="d-flex justify-content-start align-items-center pl-4 py-3 confirm-tile">
                                <div className="img-wrapper align-center">
                                    <img src="images/preview-3.png" alt="" />
                                </div>
                                <img src="images/icon-delete.svg" alt="" className="ml-5 mr-2 d-inline-block cup marker-delete" />
                                <img src="images/icon-download.svg" alt="" className="ml-3" />
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
                    <ul className="carousel-dots mt-3 d-block text-center pb-5">
                        <li className="dot-1"></li>
                        <li className="dot-2"></li>
                        <li className="dot-3 active"></li>
                    </ul>
                </div>
            </div>

            {/* <!-- modal dialog end --> */}

        </div>
    </div>



    {/* <!-- new project modal end -->

  <!-- new folder modal begins --> */}

    <div className="modal fade new-folder" id="newFolderModal" tabindex="-1" role="dialog" data-backdrop="static"
        aria-labelledby="newFolderModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

            <div className="modal-content slide-f1 active">
                <div className="modal-body flex-column">
                    <h5 className="modal-title d-block text-uppercase text-white text-center">New Folder</h5>
                    <div className="form-group d-block text-center">
                        <label for="folder-name" className="text-white mb-4">Give your folder a name</label>
                        <input type="text" className="form-control" name="" id="folder-name" aria-describedby="folder-name"
                            placeholder="Folder Name"/>
                        <div className="d-block text-center btn-call-to-action mt-5">
                            <button className="btn btn-white" onclick="showNext('slide-f2')">confirm</button>
                            <button className="btn btn-white ml-3" data-dismiss="modal" aria-label="Close">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-content slide-f2 d-none">
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
                            <button className="btn btn-white" data-dismiss="modal" aria-label="Close"
                                onclick="getFolderName('slide-f2')">Got it</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- modal dialog end --> */}

        </div>
    </div>

    {/* <!-- new folder modal ends --> */ }



    {/* <!-- delete marker modal starts --> */ }

    <div className="modal fade delete-marker-modal" id="deleteMarkerModal" tabindex="-1" role="dialog" data-backdrop=""
        aria-labelledby="deleteMarkerModal" aria-hidden="true" style={{zIindex: 999999}}>
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

            <div className="modal-content slide-d1">
                <div className="modal-body flex-column">
                    <h5 className="modal-title d-block text-uppercase text-white text-center">Delete Marker</h5>
                    <p className="modal-text text-white text-center">Confirm you wish to delete this marker?</p>
                    <div className="d-block text-center btn-call-to-action mt-3">
                        <button className="btn btn-white btn-confirm-marker-delete">confirm</button>
                        <button className="btn btn-white ml-3" data-dismiss="modal" aria-label="Close">Cancel</button>
                    </div>
                </div>
            </div>
            {/* <!-- modal dialog end --> */}

        </div>
    </div>

    {/* <!-- delete marker modal ends --> */ }



    {/* <!-- view project modal starts--> */ }

    <div className="modal fade " id="viewProjectModal" tabindex="-1" role="dialog" data-backdrop="static"
        aria-labelledby="viewProjectModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

            <div className="modal-content slide-1 pb-3">
                <button type="button" className="new-project-modal-close close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="images/icon-close.svg" alt="" /></span>
                </button>
                <div className="modal-body row">
                    <div className="col text-center">

                        <h5 className="modal-title">View Project</h5>
                        <p className="modal-text">
                            Scan the QR code below using your smart device
                        </p>
                        <p>
                            <img src="images/scan-code-lg.png" alt="" />
                        </p>
                        <p className="modal-text">
                            Then point your device camera at the marker shown opposite <img src="images/icon-arrow-right.svg" alt="" />
                        </p>


                        <p className="modal-text mt-5">
                            Your <span className="text-uppercase">Live</span> project <span className="text-uppercase">URL</span> is: <br/>
                                <a href="https://ar.blippar.com/305075154" className="text-warning">https://ar.blippar.com/305075154</a> <span
                                    className="cup"><img src="images/icon-copy-link.svg" alt="" /></span>
                        </p>

                        <div className="d-block text-center btn-call-to-action mt-5">
                            <button className="btn btn-secondary">Download QR and marker</button>
                        </div>
                    </div>
                    <div className="col">
                        <img src="images/marker-lg.png" alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- modal dialog end --> */}

        </div>
    </div>

    {/* <!-- view project modal ends-->

  <!-- view project modal starts--> */}

    <div className="modal fade modal-viewproj-wo" id="viewProjectWOModal" tabindex="-1" role="dialog" data-backdrop="static"
        aria-labelledby="viewProjectWOModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md" role="document">

            <div className="modal-content slide-1 pb-3">
                <button type="button" className="new-project-modal-close close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="images/icon-close.svg" alt="" /></span>
                </button>
                <div className="modal-body row">
                    <div className="col text-center">

                        <h5 className="modal-title">View Project</h5>
                        <p className="modal-text">
                            Scan the QR code below using your smart device
                        </p>
                        <p>
                            <img src="images/scan-code-lg.png" alt="" />
                        </p>
                        <p className="modal-text">
                            Then point your device camera at the marker shown opposite <img src="images/icon-arrow-right.svg" alt="" />
                        </p>


                        <p className="modal-text mt-5">
                            Your <span className="text-uppercase">Live</span> project <span className="text-uppercase">URL</span> is: <br/>
                                <a href="https://ar.blippar.com/305075154" className="text-warning">https://ar.blippar.com/305075154</a> <span
                                    className="cup"><img src="images/icon-copy-link.svg" alt="" /></span>
                        </p>

                        <div className="d-block text-center btn-call-to-action mt-5">
                            <button className="btn btn-secondary">Download QR and marker</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- modal dialog end --> */}

        </div>
    </div>

    {/* <!-- view project modal ends-->

  <!-- preview project modal starts --> */}

    <div className="modal fade " id="previewProjectModal" tabindex="-1" role="dialog" data-backdrop="static"
        aria-labelledby="previewProjectModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

            <div className="modal-content slide-pp1 pb-3">
                <button type="button" className="new-project-modal-close close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="images/icon-close.svg" alt="" /></span>
                </button>
                <div className="modal-body row">
                    <div className="col text-center">

                        <h5 className="modal-title">Preview Project</h5>
                        <p className="modal-text">
                            Scan the QR code below using your smart device
                        </p>
                        <p>
                            <img src="images/scan-code-lg.png" alt="" />
                        </p>
                        <p className="modal-text">
                            Then point your device camera at the marker shown opposite <img src="images/icon-arrow-right.svg" alt="" />
                        </p>

                        <div className="d-flex justify-content-center">
                            <div className="expiry-time m-3 ">
                                <p className="modal-text">Preview expires in: <br/>
                                    <h5 className="mt-n2">14m 05s</h5>
                                </p>
                            </div>
                        </div>
                        <p className="modal-text mt-5">
                            Your <span className="text-uppercase">Preview</span> project URL is: <br/>
                                <a href="https://ar.blippar.com/305075154" className="text-warning">https://ar.blippar.com/305075154</a> <span
                                    className="cup"><img src="images/icon-copy-link.svg" alt="" /></span>
                        </p>
                    </div>
                    <div className="col">
                        <img src="images/preview-lg.png" alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- modal dialog end --> */}

        </div>
    </div>

    {/* <!-- preview project modal ends -->

  <!-- publish project modal starts --> */}

    <div className="modal fade " id="publishProjectModal" tabindex="-1" role="dialog" data-backdrop="static"
        aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">

            <div className="modal-content slide-pp1 pb-3">
                <button type="button" className="new-project-modal-close close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="images/icon-close.svg" alt="" /></span>
                </button>
                <div className="modal-body row">
                    <div className="col text-center">

                        <h5 className="modal-title mt-n3">Project Published<img src="images/icon-celebrate.svg" alt="" className="mt-n2" />
                        </h5>
                        <p className="modal-text">
                            Your project is now live and ready to share. <br/>
                                Scan the QR code below using your smart device.
                        </p>
                        <p>
                            <img src="images/scan-code-lg.png" alt="" />
                        </p>
                        <p className="modal-text">
                            Then point your device camera at the marker shown opposite <img src="images/icon-arrow-right.svg" alt="" />
                        </p>


                        <p className="modal-text mt-5">
                            Your <span className="text-uppercase">Live</span> project <span className="text-uppercase">URL</span> is: <br/>
                                <a href="https://ar.blippar.com/305075154" className="text-warning">https://ar.blippar.com/305075154</a> <span
                                    className="cup"><img src="images/icon-copy-link.svg" alt="" /></span>
                        </p>

                        <div className="d-block text-center btn-call-to-action mt-5">
                            <button className="btn btn-secondary">Download QR and marker</button>
                        </div>
                    </div>
                    <div className="col">
                        <img src="images/preview-lg.png" alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- modal dialog end --> */}

        </div>
    </div>

    {/* <!-- publish project modal ends --> */ }


    <div className="backdrop d-none"></div>
        </div>
    
    )
}
export default Projects;
