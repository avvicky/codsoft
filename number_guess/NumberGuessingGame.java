import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

public class NumberGuessingGame extends JFrame {

    private final JTextField guessField;
    private final JButton guessButton;
    private final JLabel feedbackLabel;
    private final JLabel instructionLabel;
    private final JLabel attemptsLabel;
    private int targetNumber;
    private int attemptCount;
    private final int maxAttempts = 10;

    public NumberGuessingGame() {
        setTitle("Number Guessing Game");
        setSize(400, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new GridLayout(5, 1));

        instructionLabel = new JLabel("Guess a number between 1 and 100:");
        instructionLabel.setHorizontalAlignment(SwingConstants.CENTER);
        add(instructionLabel);

        guessField = new JTextField();
        add(guessField);

        guessButton = new JButton("Guess");
        guessButton.addActionListener(new GuessButtonListener());
        add(guessButton);

        feedbackLabel = new JLabel("");
        feedbackLabel.setHorizontalAlignment(SwingConstants.CENTER);
        add(feedbackLabel);

        attemptsLabel = new JLabel("Attempts left: " + maxAttempts);
        attemptsLabel.setHorizontalAlignment(SwingConstants.CENTER);
        add(attemptsLabel);

        resetGame();
    }

    private void resetGame() {
        Random random = new Random();
        targetNumber = random.nextInt(100) + 1;
        attemptCount = 0;
        feedbackLabel.setText("");
        guessField.setText("");
        attemptsLabel.setText("Attempts left: " + maxAttempts);
        instructionLabel.setText("Guess a number between 1 and 100:");
    }

    private class GuessButtonListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            try {
                int guess = Integer.parseInt(guessField.getText());
                attemptCount++;
                int attemptsLeft = maxAttempts - attemptCount;

                if (guess < 1 || guess > 100) {
                    feedbackLabel.setText("Please enter a number between 1 and 100.");
                } else if (guess < targetNumber) {
                    feedbackLabel.setText("Too low! Try again.");
                } else if (guess > targetNumber) {
                    feedbackLabel.setText("Too high! Try again.");
                } else {
                    feedbackLabel.setText("Correct! You guessed it in " + attemptCount + " attempts.");
                    int result = JOptionPane.showConfirmDialog(null, "You guessed it! Play again?", "Play Again?",
                            JOptionPane.YES_NO_OPTION);
                    if (result == JOptionPane.YES_OPTION) {
                        resetGame();
                    } else {
                        System.exit(0);
                    }
                }

                if (attemptsLeft > 0 && guess != targetNumber) {
                    attemptsLabel.setText("Attempts left: " + attemptsLeft);
                } else if (attemptsLeft == 0) {
                    feedbackLabel.setText("Game over! The correct number was " + targetNumber + ".");
                    int result = JOptionPane.showConfirmDialog(null, "Out of attempts! Play again?", "Play Again?",
                            JOptionPane.YES_NO_OPTION);
                    if (result == JOptionPane.YES_OPTION) {
                        resetGame();
                    } else {
                        System.exit(0);
                    }
                }
            } catch (NumberFormatException ex) {
                feedbackLabel.setText("Invalid input. Please enter a number.");
            }
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            NumberGuessingGame game = new NumberGuessingGame();
            game.setVisible(true);
        });
    }
}
