import './app3.css';
import $ from 'jquery'
const $square = $('#app3 .square')
$square.on('click', () => {
    $square.toggleClass('active')   //toggleClass可以用来实现自己做到有（）中的效果就删掉，没有就加上 从而达到一个反复的动作
})