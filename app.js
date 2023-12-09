$(document).ready(() => {


    function getdate() {
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        let ampm = date.getHours() < 12 ? 'AM' : 'PM'



        $('.hour').html(hour)
        $('.minute').html(': ' + minutes)
        $('.second').html(': ' + seconds)
        $('.ampm').html(ampm)
    }
    window.setInterval(getdate, 1000)



})