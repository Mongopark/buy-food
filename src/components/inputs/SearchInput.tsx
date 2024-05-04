import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  SearchNormal1,
  Candle,
  CloseCircle,
  Cake,
  Clock,
} from "iconsax-react-native";
import { lightText, primaryColor, textColor } from "../../constants/colors";
import { styles } from "../../styles/SearchInput.styles";
import { BottomSheet } from "react-native-btr";
import FilterComponent from "../filter/FilterComponent";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(false);
  const [innerModal, setInnerModal] = useState(false);

  const handleSearchTextChange = (text: React.SetStateAction<string>) => {
    setSearchText(text);
  };

  const handleSearch = () => {
    // Perform search logic here
    // Add searchText to searchHistory array
    // setSearchHistory([searchText, ...searchHistory.slice(0, 4)]);
    console.log("dddj");
    setIsOpen(false);
  };

  const handleDropdownFocus = () => {
    setIsOpen(true);
  };

  const handleDropdownItemPress = (item: React.SetStateAction<string>) => {
    setSearchText(item);
    handleSearch();
    setIsOpen(false);
  };

  const DATA: any = [
    {
      icon: <Cake size="24" color="#FFB80E" />,
      name: "Breakfast",
    },
    {
      icon: <Cake size="24" color="#FFB80E" />,
      name: "Lunch",
    },
    {
      icon: <Cake size="24" color="#FFB80E" />,
      name: "Drinks",
    },
    {
      icon: <Cake size="24" color="#FFB80E" />,
      name: "Pasta",
    },
    {
      icon: <Cake size="24" color="#FFB80E" />,
      name: "Chicken",
    },
    {
      icon: <Cake size="24" color="#FFB80E" />,
      name: "Salad",
    },
  ];

  const SEARCH: string[] = [
    "Vendor's name",
    "Vendor's name",
    "Vendor's name",
    "Vendor's name",
  ];

  const renderDropdown = () => {
    return (
      <SafeAreaView>
        <Modal
          visible={isOpen}
          animationType="slide"
          transparent
          onRequestClose={() => setIsOpen(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.dropdownContainer}>
                <View style={styles.closeContainer}>
                  <TouchableOpacity onPress={() => setIsOpen(false)}>
                    <CloseCircle variant="Outline" size={16} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.searchContainer}>
                  <SearchNormal1 size={16} color="black" variant="Linear" />
                  <TextInput
                    autoFocus
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor={lightText}
                    autoCapitalize="none"
                    value={searchText}
                    onChangeText={handleSearchTextChange}
                    onSubmitEditing={handleSearch}
                    onPressIn={handleDropdownFocus}
                  />
                  <TouchableOpacity onPress={() => setInnerModal(true)}>
                    <Candle
                      variant="Outline"
                      size={14}
                      color={primaryColor}
                      rotation={270}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <View style={styles.dropdownContent}>
                  <View style={styles.flex}>
                    <Text style={styles.recent}>Recent searches</Text>
                    {SEARCH.map((e, i) => (
                      <TouchableOpacity
                        key={i}
                        onPress={() => handleDropdownItemPress(e)}
                      >
                        <View style={styles.search}>
                          <Clock size="15" color="#747474" />
                          <Text style={styles.dropdownItem}>{e}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.dropdownSection}>
                    <Text style={styles.dropdownSectionTitle}>
                      Top Categories
                    </Text>
                    <ScrollView>
                      {DATA.map((ele: any, i: any) => (
                        <TouchableOpacity
                          key={i}
                          onPress={() => handleDropdownItemPress(ele.name)}
                        >
                          <View style={styles.categoriesContainer}>
                            {ele.icon}
                            <Text style={styles.dropdownItem}>{ele.name}</Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                      {DATA.map((ele: any, i: any) => (
                        <TouchableOpacity
                          key={i}
                          onPress={() => handleDropdownItemPress(ele.name)}
                        >
                          <View style={styles.categoriesContainer}>
                            {ele.icon}
                            <Text style={styles.dropdownItem}>{ele.name}</Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                      {DATA.map((ele: any, i: any) => (
                        <TouchableOpacity
                          key={i}
                          onPress={() => handleDropdownItemPress(ele.name)}
                        >
                          <View style={styles.categoriesContainer}>
                            {ele.icon}
                            <Text style={styles.dropdownItem}>{ele.name}</Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                      {DATA.map((ele: any, i: any) => (
                        <TouchableOpacity
                          key={i}
                          onPress={() => handleDropdownItemPress(ele.name)}
                        >
                          <View style={styles.categoriesContainer}>
                            {ele.icon}
                            <Text style={styles.dropdownItem}>{ele.name}</Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <BottomSheet
            visible={innerModal}
            onBackButtonPress={() => setInnerModal(false)}
            onBackdropPress={() => setInnerModal(false)}
          >
            <FilterComponent setQuery={() => setInnerModal(false)} />
          </BottomSheet>
        </Modal>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchNormal1 size={16} color="black" variant="Linear" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={lightText}
          autoCapitalize="none"
          value={searchText}
          onChangeText={(e) => {
            handleSearchTextChange(e);
            handleDropdownFocus();
          }}
          onSubmitEditing={handleSearch}
          onPressIn={handleDropdownFocus}
        />
        <TouchableOpacity onPress={() => setBottomSheet(true)}>
          <Candle variant="Outline" size={14} color={textColor} rotation={90} />
        </TouchableOpacity>
      </View>
      {renderDropdown()}
      <BottomSheet
        visible={bottomSheet}
        onBackdropPress={() => setBottomSheet(false)}
        onBackButtonPress={() => setBottomSheet(false)}
      >
        <FilterComponent setQuery={() => setBottomSheet(false)} />
      </BottomSheet>
    </View>
  );
};

export default SearchInput;
