function print_binary_number(bit_width, val) {
    let bits = "";
    let width = bit_width;
    for(let i = width - 1; i >=0; i--) {
        let bit = (val >> i) & 1;
        bits += bit;
        if(i % 4 == 0) {
            bits += " ";
        }
    }
    console.log(bits);
}

print_binary_number(32, 8);