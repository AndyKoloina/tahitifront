//import classie from 'classie';
let menuRight = document.getElementById( 'cbp-spmenu-s2' ),
    showRight = document.getElementById( 'nav-icon1' ),
		body = document.body;


showRight.onclick = ()  => {
  //this.classList.toggle('active');
  menuRight.classList.toggle('cbp-spmenu-open')
  //showRight.classList.toggle( menuRight, 'cbp-spmenu-open' );
  disableOther( 'showRight' );
};

let disableOther = ( button ) => {
	if( button !== 'showRight' ) {
    this.classList.toggle('disabled')
		//this.classList.toggle( showRight, 'disabled' );
	}
}
