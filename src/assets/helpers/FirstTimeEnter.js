
export default function IsFirstTimeEnter(route) {
    let hasHash = route.hash !== "";
    return !hasHash && (document.cookie === 'visited=false' || document.cookie === '') && route.params.project === "";
}
