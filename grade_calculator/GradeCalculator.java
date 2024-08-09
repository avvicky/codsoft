import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class GradeCalculator extends JFrame implements ActionListener {

    // Components of the GUI
    private JTextField englishField, oopsField, dbmsField, cnField, cloudField;
    private JButton calculateButton;
    private JLabel resultLabel;

    // Constructor to set up the GUI
    public GradeCalculator() {
        setTitle("Student Grade Calculator");

        // Set layout manager
        setLayout(null);

        // Create labels
        JLabel englishLabel = new JLabel("English:");
        englishLabel.setBounds(50, 30, 100, 30);
        add(englishLabel);

        JLabel oopsLabel = new JLabel("OOPS:");
        oopsLabel.setBounds(50, 70, 100, 30);
        add(oopsLabel);

        JLabel dbmsLabel = new JLabel("DBMS:");
        dbmsLabel.setBounds(50, 110, 100, 30);
        add(dbmsLabel);

        JLabel cnLabel = new JLabel("Computer Network:");
        cnLabel.setBounds(50, 150, 150, 30);
        add(cnLabel);

        JLabel cloudLabel = new JLabel("Cloud Computing:");
        cloudLabel.setBounds(50, 190, 150, 30);
        add(cloudLabel);

        // Create text fields
        englishField = new JTextField();
        englishField.setBounds(200, 30, 100, 30);
        add(englishField);

        oopsField = new JTextField();
        oopsField.setBounds(200, 70, 100, 30);
        add(oopsField);

        dbmsField = new JTextField();
        dbmsField.setBounds(200, 110, 100, 30);
        add(dbmsField);

        cnField = new JTextField();
        cnField.setBounds(200, 150, 100, 30);
        add(cnField);

        cloudField = new JTextField();
        cloudField.setBounds(200, 190, 100, 30);
        add(cloudField);

        // Create calculate button
        calculateButton = new JButton("Calculate Grade");
        calculateButton.setBounds(50, 230, 250, 30);
        calculateButton.addActionListener(this);
        add(calculateButton);

        // Create result label
        resultLabel = new JLabel("");
        resultLabel.setBounds(50, 270, 250, 30);
        add(resultLabel);

        // Set JFrame properties
        setSize(400, 450);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // Calculate average grade
        try {
            int english = Integer.parseInt(englishField.getText());
            int oops = Integer.parseInt(oopsField.getText());
            int dbms = Integer.parseInt(dbmsField.getText());
            int cn = Integer.parseInt(cnField.getText());
            int cloud = Integer.parseInt(cloudField.getText());

            int average = (english + oops + dbms + cn + cloud) / 5;

            resultLabel.setText("Grade: " + average);
        } catch (NumberFormatException ex) {
            resultLabel.setText("Please enter valid integers.");
        }
    }

    public static void main(String[] args) {
        new GradeCalculator();
    }
}
