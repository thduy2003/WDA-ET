import React from "react";
import { Form } from "antd";
import Quill from "quill";
import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css";
import { Rule } from "antd/es/form";
export interface InputEditorValue {
  text: string;
  html: string;
}

export interface InputEditorRef {
  setHtml: (value: string) => void;
  getValue: () => InputEditorValue;
}

export interface InputEditorProps {
  id?: string;
  name?: string;
  label?: string;
  width?: string | number;
  height?: string | number;
  initialValue?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  rules?: Rule[];
  onChange?: (value: { text: string; html: string }) => void;
}

const InputEditorRender: React.ForwardRefRenderFunction<
  InputEditorRef,
  InputEditorProps
> = (props, ref) => {
  const {
    id,
    name,
    label,
    width,
    height,
    initialValue,
    placeholder,
    readOnly,
    disabled,
    rules,
    onChange,
  } = props;

  Quill.register(Quill.import("attributors/style/align"), true);
  Quill.register(Quill.import("attributors/style/background"), true);
  Quill.register(Quill.import("attributors/style/color"), true);
  Quill.register(Quill.import("attributors/style/direction"), true);
  Quill.register(Quill.import("attributors/style/font"), true);

  const sizeStyle = Quill.import("attributors/style/size");
  sizeStyle.whitelist = [
    "10px",
    "11px",
    "12px",
    "13px",
    false,
    "15px",
    "16px",
    "17px",
    "18px",
    "19px",
    "20px",
    "21px",
    "22px",
    "23px",
    "24px",
    "25px",
    "26px",
    "27px",
    "28px",
    "29px",
    "30px",
    "31px",
    "32px",
    "33px",
    "34px",
    "35px",
    "36px",
    "37px",
    "38px",
    "39px",
    "40px",
    "41px",
    "42px",
    "43px",
    "44px",
    "45px",
    "46px",
    "47px",
    "48px",
    "49px",
    "50px",
  ];
  Quill.register(sizeStyle, true);

  const { quillRef, quill } = useQuill({
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ align: [false, "center", "right", "justify"] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        [{ size: sizeStyle.whitelist }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image", "video"],
        [{ color: [] }, { background: [] }],
        ["clean"],
      ],
    },
    scrollingContainer: "html",
    placeholder: placeholder ?? "Nhập nội dung...",
    readOnly: readOnly ?? false,
  });

  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(initialValue ?? "");

      quill.on("text-change", () => {
        if (onChange)
          onChange({
            text: quill.getText(),
            html: quill.root.innerHTML,
          });
      });

      if (disabled) quill.enable(false);
    }
  }, [quill, initialValue, disabled, onChange]);

  React.useImperativeHandle(ref, () => ({
    setHtml: (value: string) => {
      quill?.clipboard.dangerouslyPasteHTML(value ?? "");
    },
    getValue: (): InputEditorValue => {
      return {
        text: quill?.getText() ?? "",
        html: quill?.root.innerHTML ?? "",
      };
    },
  }));

  return (
    <Form.Item name={name} label={label} rules={rules} className='input-editor'>
      <div
        id={id}
        ref={quillRef}
        style={{
          width: width ?? "100%",
          height: height ?? 300,
        }}
      />
    </Form.Item>
  );
};

const InputEditor = React.forwardRef<InputEditorRef, InputEditorProps>(
  InputEditorRender
);

export default InputEditor;
