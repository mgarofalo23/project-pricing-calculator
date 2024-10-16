function calculateTotal() {
    // Get values for each role
    const accountDirectorHours = parseFloat(document.getElementById('accountDirectorHours').value);
    const accountDirectorRate = parseFloat(document.getElementById('accountDirectorRate').value);
    
    const medicalStrategistHours = parseFloat(document.getElementById('medicalStrategistHours').value);
    const medicalStrategistRate = parseFloat(document.getElementById('medicalStrategistRate').value);
    
    const copywriterHours = parseFloat(document.getElementById('copywriterHours').value);
    const copywriterRate = parseFloat(document.getElementById('copywriterRate').value);

    // Calculate total costs for each role
    const accountDirectorCost = accountDirectorHours * accountDirectorRate;
    const medicalStrategistCost = medicalStrategistHours * medicalStrategistRate;
    const copywriterCost = copywriterHours * copywriterRate;

    // Add all role costs together
    const totalCost = accountDirectorCost + medicalStrategistCost + copywriterCost;

    // Output the result
    document.getElementById('totalCost').textContent = `$${totalCost.toFixed(2)}`;
}
