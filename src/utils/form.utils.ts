const validateMessages = {
  required: "${label} là bắt buộc!",
  types: {
    email: "${label} sai định dạng!",
    number: "${label} bắt buộc phải nhập số!",
  },
  number: {
    range: "${label} phải lớn hơn ${min} và nhỏ hơn ${max}",
  },
};

export { validateMessages };
