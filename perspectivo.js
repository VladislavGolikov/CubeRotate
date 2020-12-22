

//area.addEventListener('mouseover',()=>{area.style.cursor='crosshair'})

class CubeRotate {
    constructor(cubeSize,vectorCube,vectorCardano,roundCube,opaqueCube,left,top,side1,side2,side3,side4,side5,side6) {
        this.cubeSize=cubeSize; /* размер будет в vh */
        this.vectorCube=vectorCube;
        this.vectorCardano=vectorCardano;
        this.counterCube=0;
        this.counterCardano=0;
        this.roundCube=roundCube/2; /* чтобы только при 1 максимально круглый куб */
        this.opaqueCube=opaqueCube;
        this.placeX=left;
        this.placeY=top;

        this.cardanoArea=document.querySelector('.area');
        this.sideArea=document.querySelectorAll('.area > div');
        this.defaultColor=[];
        this.defaultColor[1]=`red`;
        this.defaultColor[2]=`blue`;
        this.defaultColor[3]=`yellow`;
        this.defaultColor[4]=`green`;
        this.defaultColor[5]=`white`;
        this.defaultColor[6]=`brown`;
        this.coefTextSize=1/5;
        this.coefCardanoSize=3; /* амплитуда колебаний куба фактически */


        this.rapidCube=5;
        this.rapidCardano=2.2;
        this.allStylize();
        this.allDrive();
    }
    allStylize() {

        this.sideArea.forEach(function(el,ind){
            el.style.backgroundColor=this.defaultColor[++ind];
            if (ind<=3){el.style.color=this.defaultColor[ind+3]}else{el.style.color=this.defaultColor[ind-3]};
            el.style.width=`${this.cubeSize}vh`;
            el.style.height=`${this.cubeSize}vh`;
            el.style.transformOrigin=`${this.cubeSize/2}vh ${this.cubeSize/2}vh ${this.cubeSize/-2}vh`;
            el.style.opacity=`${this.opaqueCube}`;
            el.style.borderRadius=`${this.cubeSize*this.roundCube}vh`;
            el.style.lineHeight=`${this.cubeSize}vh`;
            el.style.fontSize=`${this.cubeSize*this.coefTextSize}vh`;
        },this);
        this.cardanoArea.style.width=`${this.cubeSize*this.coefCardanoSize}vh`;
        this.cardanoArea.style.height=`${this.cubeSize*this.coefCardanoSize}vh`;
        this.cardanoArea.style.left=`${this.placeX}vw`;
        this.cardanoArea.style.top=`${this.placeY}vh`;
    }

    allDrive() {
        this.counterCube+=this.rapidCube;
        this.counterCardano+=this.rapidCardano;

        this.sideArea[0].style.transform=`rotate3d(${this.vectorCube}${this.counterCube}deg)`;
        this.sideArea[1].style.transform=`rotate3d(${this.vectorCube}${this.counterCube+120}deg)`;
        this.sideArea[2].style.transform=`rotate3d(${this.vectorCube}${this.counterCube+240}deg)`;
        this.sideArea[3].style.transform=`rotate3d(${this.vectorCube}${this.counterCube}deg) rotateX(180deg)`;
        this.sideArea[4].style.transform=`rotate3d(${this.vectorCube}${this.counterCube+120}deg) rotateX(180deg)`;
        this.sideArea[5].style.transform=`rotate3d(${this.vectorCube}${this.counterCube+240}deg) rotateX(180deg)`;
                    /* оставим так не сжимая в forEach чтобы были понятны трансформации! */
                    /* поворот по X текст на гранях в разные стороны, по Y - в одну строну! */

        this.cardanoArea.style.transform=`rotate3d(${this.vectorCardano}${this.counterCardano}deg)`;

        window.requestAnimationFrame(()=>{this.allDrive(this)});
    }
}

new CubeRotate(10,'1,-1,1,','0,1,0,',0,0.9,5,5);