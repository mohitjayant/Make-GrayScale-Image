var image = null;

function upload() {
    var imgcanvas = document.getElementById("can");
    var fileinput = document.getElementById("finput");

    image = new SimpleImage(finput);
    image.drawTo(imgcanvas);
    
}

function makegray() {

    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
        
    }

    var imgcanvas = document.getElementById("can");
    image.drawTo(imgcanvas);
}