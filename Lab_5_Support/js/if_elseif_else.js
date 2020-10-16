const switchDate = new Date().getDay();

if(switchDate === 0){
    console.log('Sunday');
}
else if (switchDate === 1){
    console.log('Monday');
}
else if (switchDate === 2){
    console.log('Tuesday');
}
else if (switchDate === 3){
    console.log('Wednesday');
}
else if (switchDate === 4){
    console.log('Thursday');
}
else if (switchDate === 5){
    console.log('Friday');
}
else if (switchDate === 6){
    console.log('Saturday');
}
else{
    console.log('We are outside the normal stream of time');
}