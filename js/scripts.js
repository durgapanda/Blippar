function showNext(slide) {
    resetSlides();
    setActiveSlide(slide)
}

function setActiveSlide(slide) {
    $("." + slide).removeClass("d-none").addClass("active");
    if (slide == "slide-np2") {
        $("video[autoplay]").each(function () {
            this.play();
        });
        $("video[loop]").on('ended', function () {
            this.load();
            this.play();
        });
    }
}

function getActiveSlide() {
    return $(".modal-content.active")
}

function resetSlides() {
    let activeSlide = getActiveSlide()
    activeSlide.removeClass("active").addClass("d-none");
}

function getFolderName() {
    let folderName = $("#folder-name").val();
    resetSlides();
}

function showView(type) {
    if (type == "tile") {
        $(".icon-tiles").addClass("d-none")
        $(".icon-grid").removeClass("d-none")
        $(this).addClass("d-none")
        $(".section-grid").removeClass("active").addClass("d-none")
        $(".section-tiles").removeClass("d-none").addClass("active")
    } else if (type == "grid") {
        $(".icon-grid").addClass("d-none")
        $(".icon-tiles").removeClass("d-none")
        $(".section-tiles").removeClass("active").addClass("d-none")
        $(".section-grid").removeClass("d-none").addClass("active")
    }
}
function showMenu(elm) {
    resetMenu()
    elm.nextElementSibling.classList.remove("d-none");;
}

function resetMenu() {
    $(".menu").addClass("d-none")
}
function hideMessage() {
    $(".d-message").addClass('d-none');
}


$(function () {

    $('#newProjectModal').on('hidden.bs.modal', function (event) {
        showNext("slide-np1")
    })
    $('#newFolderModal').on('hidden.bs.modal', function (event) {
        showNext("slide-f1")
    })
    $('#viewProjectModal, #viewProjectWOModal').on('show.bs.modal', function (event) {
        resetMenu()
    })

    $('#deleteMarkerModal').on('hidden.bs.modal', function (event) {
        $(".backdrop").addClass("d-none");
    })

    $(".marker-delete").on("click", () => {
        $(".backdrop").removeClass("d-none");
        $('#deleteMarkerModal').modal('show');
    })

    $(".card-img-top").mouseenter((e) => {
        showMenu(e.target);
    })
    $(".card-image-container").mouseleave(() => {
        resetMenu();
    })


})


