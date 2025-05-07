document.addEventListener('DOMContentLoaded', function() {
    var grid = document.querySelector('.pinterest-gallery');
    var msnry = new Masonry(grid, {
        itemSelector: '.item', // Chọn các phần tử con là item
        columnWidth: '.item', // Sử dụng chiều rộng của item làm chiều rộng cột cơ sở (có thể tùy chỉnh)
        percentPosition: true, // Sử dụng phần trăm để định vị các item
        gutter: 8 // Khoảng cách giữa các item (phải trùng với grid-gap trong CSS)
    });

    // Re-layout Masonry sau khi tất cả hình ảnh đã được tải (tùy chọn)
    imagesLoaded(grid).on('progress', function() {
        msnry.layout();
    });
});