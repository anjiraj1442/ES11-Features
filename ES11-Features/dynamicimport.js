//import js files dynamically when its requiered
if (true){
     const module = await import('./matchall.js');
     module.myMethod();
}