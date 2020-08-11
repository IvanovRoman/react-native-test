import React, { Component } from "react"
import { View, FlatList, ActivityIndicator } from "react-native"
import { NavigationScreenProp, NavigationState } from "react-navigation"
import { connect } from "react-redux"
import { Header } from "../../../components"
import styles from "./styles"
import { Item } from "../../../components"
import { logoutUserService } from "../../../redux/services/user"

import { fetchItemData } from "../../../redux/actions/fetch"

interface Props {
  navigation: NavigationScreenProp<NavigationState>
  fetchItemData: () => void
  imageData: any
  loading: boolean
}

interface itemProp {
  item: any
}

class Home extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    const { fetchItemData } = this.props
    fetchItemData()
  }

  handleLogout = () => {
    const { navigation } = this.props
    logoutUserService().then(() => {
      navigation.navigate("AuthStack")
    })
  }

  render() {
    const { navigation, imageData, loading } = this.props

    return (
      <View style={styles.container}>
        <Header title="Список" />
        <FlatList
          data={imageData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: itemProp) => {
            return (
              <Item
                title={item.title}
                onPress={() =>
                  navigation.navigate("Content", {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                  })
                }
              />
            )
          }}
          ListFooterComponent={
            loading ? (
              <View style={styles.loadingFooter}>
                <ActivityIndicator />
              </View>
            ) : null
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
  imageData: state.data,
  loading: state.loading,
})

function bindToAction(dispatch: any) {
  return {
    fetchItemData: () => dispatch(fetchItemData()),
  }
}

export default connect(mapStateToProps, bindToAction)(Home)
