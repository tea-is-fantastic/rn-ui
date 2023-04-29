import React from 'react';
import { Text, View } from 'react-native';
import { Localized, LocalizedConfig, LocalizedStyle } from './localized';

interface IEngishUrdu {
  loc: Localized;
  config?: LocalizedConfig;
  hide?: boolean;
}

export const EnglishUrduColumn: React.FC<IEngishUrdu> = ({ loc, config }) => {
  const style: LocalizedStyle = config
    ? config.getStyle()
    : new LocalizedStyle();
  const maxLines = config ? config.maxLines : undefined;
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Text style={{ ...style.enUS }} numberOfLines={maxLines}>
        {loc.enUS}
      </Text>
      <Text style={{ ...style.urPK }} numberOfLines={maxLines}>
        {loc.urPK}
      </Text>
    </View>
  );
};

export const EnglishUrduRow: React.FC<IEngishUrdu> = ({ loc, config }) => {
  const style: LocalizedStyle = config
    ? config.getStyle()
    : new LocalizedStyle();
  const maxLines = config ? config.maxLines : undefined;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'stretch',
      }}
    >
      <View
        style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}
      >
        <Text
          style={{
            ...style.enUS,
            alignItems: 'center',
          }}
          numberOfLines={maxLines}
        >
          {loc.enUS}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ ...style.urPK }} numberOfLines={maxLines}>
          {loc.urPK}
        </Text>
      </View>
    </View>
  );
};

export const EnglishUrdu: React.FC<IEngishUrdu> = ({ loc, hide, config }) => {
  const style: LocalizedStyle = config
    ? config.getStyle()
    : new LocalizedStyle();
  return (
    <Text numberOfLines={1}>
      <Text style={style.enUS}>{loc.enUS}</Text>
      {!hide && <Text>{'  '}</Text>}
      {!hide && <Text style={style.urPK}>{loc.urPK}</Text>}
    </Text>
  );
};
