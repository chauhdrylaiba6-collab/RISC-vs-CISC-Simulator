function runRISC() {
    let instructions = 4; // LOAD, LOAD, ADD, STORE
    let cyclesPerInstruction = 1;
    let totalCycles = instructions * cyclesPerInstruction;

    document.getElementById("riscOutput").innerHTML = `
        Instructions Executed: ${instructions}<br>
        Clock Cycles per Instruction: ${cyclesPerInstruction}<br>
        Total Clock Cycles: ${totalCycles}<br>
        Execution Time: ${totalCycles} units
    `;
}

function runCISC() {
    let instructions = 1; // Complex instruction
    let cyclesPerInstruction = 4;
    let totalCycles = instructions * cyclesPerInstruction;

    document.getElementById("ciscOutput").innerHTML = `
        Instructions Executed: ${instructions}<br>
        Clock Cycles per Instruction: ${cyclesPerInstruction}<br>
        Total Clock Cycles: ${totalCycles}<br>
        Execution Time: ${totalCycles} units
    `;
}

function compare() {
    document.getElementById("compareOutput").innerHTML = `
        <b>RISC:</b> More instructions, fewer cycles per instruction<br>
        <b>CISC:</b> Fewer instructions, more cycles per instruction<br><br>
        <b>Conclusion:</b> Architectural design directly impacts performance
    `;
}