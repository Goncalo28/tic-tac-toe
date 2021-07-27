import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Square from '../../components/Square';
import styles from './styles';

const boardLayout = Array(9).fill(null);

type BoardType = Array<string | null>;
type WinnerType = null | string;

const GameBoard: React.FC = () => {
  const [board, setBoard] = useState<BoardType>(boardLayout);
  const [next, setNext] = useState<boolean>(false);
  const [winner, setWinner] = useState<WinnerType>(null);
  const [winningCombo, setWinningCombo] = useState<number[] | null>(null);
  const showXorO = next ? 'O' : 'X';

  const markerHandler = (square: number) => {
    const updatedBoard = [...board];
    if (winner || updatedBoard[square]) {
      return;
    }
    updatedBoard[square] = showXorO;
    setBoard(updatedBoard);
    gameWinnerHandler(updatedBoard);
    setNext(!next);
  };

  const gameWinnerHandler = (boardSquares: BoardType) => {
    const possibleResults = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    possibleResults.forEach((_, index) => {
      const [a, b, c] = possibleResults[index];
      if (
        boardSquares[a] &&
        boardSquares[a] === boardSquares[b] &&
        boardSquares[a] === boardSquares[c]
      ) {
        setWinner(boardSquares[a]);
        setWinningCombo([a, b, c]);
      }
    });
  };

  const restartGameHandler = () => {
    if (winner) {
      setBoard(boardLayout);
      setNext(false);
      setWinner(null);
      setWinningCombo(null);
    }
  };

  const dynamicStyles = {
    headerContainer: {
      backgroundColor: winner ? 'lightgreen' : 'white',
    },
  };

  return (
    <View style={styles.container}>
      {/* Show who's turn it is OR show winner */}
      <View style={[styles.headerContainer, dynamicStyles.headerContainer]}>
        <Text style={styles.header}>
          {winner
            ? `Player ${winner} won the game!!`
            : `Player ${showXorO}'s turn`}
        </Text>
      </View>
      {/* Board */}
      <View style={styles.boardContainer}>
        {board.map((value, index) => {
          const markWinningLine = winningCombo?.includes(index);
          return (
            <Square
              key={index}
              index={index}
              value={value}
              markerHandler={markerHandler}
              highlight={markWinningLine}
            />
          );
        })}
      </View>
      {/* If there's a winner, show restart button */}
      {winner && (
        <TouchableOpacity
          style={styles.restartButton}
          onPress={restartGameHandler}>
          <Text style={styles.restartButtonText}>Start new game!</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GameBoard;
