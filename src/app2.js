import './app2.css';
import $ from 'jquery';
const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content')
$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);  //监听父元素同时可以知道点击的是哪个子元素
    $li.addClass('selected')
        .siblings().removeClass('selected');
    const index = $li.index()        //一个jquery元素.index（）就可以知道这个元素排第几
    $tabContent
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
});
$tabBar.children().eq(0).trigger('click')