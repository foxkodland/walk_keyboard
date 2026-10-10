import styles from "./GameBrick.module.css"
export default function GameBrick({rowNumber, colNumber, cell, goalCell, playerCell}:{rowNumber:number, colNumber:number, cell:string, goalCell:number[], playerCell: number[]}){

    function specialColorCell(rowNumber: number, colNumber: number) {
    if (rowNumber == goalCell[0] &&  colNumber == goalCell[1]) {
      return styles.game_brick_target
    }
    if (rowNumber == playerCell[0] && colNumber == playerCell[1]) {
      return styles.game_brick_special
    }
    if (rowNumber == playerCell[0] - 1 && colNumber == playerCell[1]) {
      return styles.game_brick_way
    }
    if (rowNumber == playerCell[0] + 1 && colNumber == playerCell[1]) {
      return styles.game_brick_way
    }
        if (rowNumber == playerCell[0] && colNumber == playerCell[1] -1) {
      return styles.game_brick_way
    }
    if (rowNumber == playerCell[0] && colNumber == playerCell[1] +1) {
      return styles.game_brick_way
    }
    return "" 
  }
 return (
    <>
    <div className={`${styles.game_brick} ${specialColorCell(rowNumber, colNumber)}`}>{cell}</div>
    </>
 )
}