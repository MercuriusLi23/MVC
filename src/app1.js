import './app1.css';
import $ from 'jquery';
const $button1 = $('#add1');
const $button2 = $('#minus1');
const $button3 = $('#mul2');
const $button4 = $('#divide2');
const $number = $('#number');
const n = localStorage.getItem('n');
$number.text(n || 100);

$button1.on('click', () => {
    let n = parseInt($number.text())    //获取到number中的内容 并转为数字
    n += 1;
    localStorage.setItem('n', n);         //实现刷新后还是运算后的数值
    $number.text(n);                      //实现每次点击+1的效果
});

$button2.on('click', () => {
    let n = parseInt($number.text())
    n -= 1;
    localStorage.setItem('n', n)
    $number.text(n);                      //实现每次点击-1的效果
});
$button3.on('click', () => {
    let n = parseInt($number.text())
    n *= 2;
    localStorage.setItem('n', n)
    $number.text(n);                      //实现每次点击*2的效果
});
$button4.on('click', () => {
    let n = parseInt($number.text())
    n /= 2;
    localStorage.setItem('n', n)
    $number.text(n);                      //实现每次点击÷2的效果
});
