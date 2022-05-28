function showNext(slide) {
    resetSlides();
    setActiveSlide(slide)
}

function setActiveSlide(slide) {
    $("." + slide).removeClass("d-none").addClass("active");
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

})


