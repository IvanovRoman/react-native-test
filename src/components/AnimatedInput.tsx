import React, { useState, useEffect, useCallback } from "react"
import { View, TextInput, Animated, Text, TextInputProps } from "react-native"
import styles from "./styles"

type AnimatedInput = TextInputProps & {
  valid?: boolean
  disabled?: boolean
  value?: string
  styleBodyContent?: any
  styleLabel?: any
  errorColor?: any
  styleContent?: any
  prefix?: any
  sufix?: any
  secure?: boolean
}

export const AnimatedInput = (props: AnimatedInput) => {
  const {
    placeholder,
    valid = true,
    secure = false,
    errorColor,
    disabled = false,
    value = "",
    prefix,
    sufix,
    styleLabel = {},
    styleContent,
    styleBodyContent = {},
    ...others
  } = props
  const [showInput, setShowInput] = useState(false)
  const [animatedIsFocused] = useState(new Animated.Value(1))
  const [isInputFocused, setInputFocus] = useState(false)

  const inputFontSize = styles.input.fontSize
  const labelFontSize = styles.label.fontSize
  const errorFontSize = styles.error.fontSize

  const animationView = useCallback(() => {
    const sizeShow = 15 + labelFontSize + inputFontSize + 5
    const sizeHide = 15 + labelFontSize
    const inputAdjust = {
      height: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [sizeShow, sizeHide],
      }),
    }
    return inputAdjust
  }, [animatedIsFocused, inputFontSize, labelFontSize])

  const animationLabelFontSize = useCallback(() => {
    const fontAdjust = {
      fontSize: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [labelFontSize, inputFontSize],
      }),
    }
    return fontAdjust
  }, [animatedIsFocused, inputFontSize, labelFontSize])

  const onBlur = () => {
    setInputFocus(false)
    if (!value) {
      setShowInput(false)
      startAnimation()
    }
  }

  const onFocus = () => {
    setInputFocus(true)
    if (!showInput) {
      startAnimation()
    }
  }

  const borderColor = () => {
    const borderStyle: any = {}
    borderStyle.borderBottomColor =
      styleBodyContent.borderBottomColor || styles.bodyContent.borderBottomColor
    return borderStyle
  }

  const setContentHeight = () => {
    const fontsHeight = labelFontSize + inputFontSize + errorFontSize + 10
    const internalVerticalSpaces = 16
    return fontsHeight + internalVerticalSpaces
  }

  const startAnimation = useCallback(() => {
    Animated.timing(animatedIsFocused, {
      toValue: showInput ? 1 : 0,
      duration: 150,
    }).start(() => {
      if (!showInput) {
        setShowInput(true)
      }
    })
  }, [animatedIsFocused, showInput])

  useEffect(() => {
    if (value) {
      setShowInput(true)
    }
    if (value && !showInput) {
      startAnimation()
    }
    animationView()
  }, [
    valid,
    value,
    animationView,
    animationLabelFontSize,
    animatedIsFocused,
    startAnimation,
    showInput,
  ])

  return (
    <View
      style={[styles.content, styleContent, { height: setContentHeight() }]}
    >
      <Animated.View
        style={[
          styles.bodyContent,
          styleBodyContent,
          {
            width: "80%",
            borderBottomWidth: isInputFocused ? 1.5 : 0.5,
          },
          animationView(),
        ]}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Animated.Text
            style={[styles.label, styleLabel, animationLabelFontSize()]}
            onPress={() => !disabled && onFocus()}
          >
            {placeholder}
          </Animated.Text>
          {showInput && (
            <View style={styles.toucheableLineContent}>
              <TextInput
                {...others}
                value={value}
                pointerEvents={disabled ? "box-none" : "auto"}
                autoFocus
                blurOnSubmit
                editable={!disabled}
                onBlur={() => onBlur()}
                style={styles.input}
                onEndEditing={() => onBlur()}
                secureTextEntry={secure}
              />
            </View>
          )}
        </View>
      </Animated.View>
    </View>
  )
}
