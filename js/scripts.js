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
    resetSlides()
    console.log(folderName);
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

$(function () {

    $('#newProjectModal').on('hidden.bs.modal', function (event) {
        showNext("slide-1")
    })
    $('#newFolderModal').on('hidden.bs.modal', function (event) {
        showNext("slide-f1")
    })

})





