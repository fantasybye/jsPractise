enum UnDirections {
    Top,
    Right = "Right",
    Bottom = 2,
    Left,

}
interface person{
    greeting(): (userId:number) => void
}
console.log(UnDirections.Right)